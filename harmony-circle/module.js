
import by            from '../../fn/modules/by.js';
import get           from '../../fn/modules/get.js';
import overload      from '../../fn/modules/overload.js';
import { wrap }      from '../../fn/modules/wrap.js';
import toCartesian   from '../../fn/modules/vector/to-cartesian-2d.js';
import toPolar       from '../../fn/modules/vector/to-polar-2d.js';
import create        from '../../dom/modules/create.js';
import delegate      from '../../dom/modules/delegate.js';
import events        from '../../dom/modules/events.js';
import gestures      from '../../dom/modules/gestures.js';
import rect          from '../../dom/modules/rect.js';
import { extToHTML } from './modules/extension.js';
import scales        from './modules/scales.js';

const r              = 7.5;
const turn           = Math.PI * 2;
const defaultTurn    = 11 / 12;
const fourthsIndexes = [0,5,10,3,8,1,6,11,4,9,2,7];

const rotateScale = overload((data, e) => e.type, {
    pointerdown: (data, e) => {
        const { scale, circleDiv } = data;
        const box = rect(circleDiv);
        const centre = {
            x: box.x + 0.5 * box.width,
            y: box.y + 0.5 * box.height
        };

        data.centre = centre;
        data.a0     = toPolar([e.clientX - centre.x, e.clientY - centre.y])[1];
        data.t0     = fourthsIndexes.indexOf(scale.transpose || 0);

        circleDiv.classList.add('gesturing');
        return data;
    },

    pointermove: (data, e) => {
        const { r, a0, t0, centre, scale, scaleName, shadow, circleDiv, scalePath } = data;
        const a1 = toPolar([e.clientX - centre.x, e.clientY - centre.y])[1];
        const t1 = Math.round((a1 - a0) * 12 / turn);

        // Has nothing changed?
        if (t1 === data.transpose) { return data; }
        data.transpose = t1;
        scale.transpose = fourthsIndexes.indexOf(wrap(0, 12, t0 + t1));

        shadow.querySelectorAll('.chord-extension').forEach((element) => element.remove());
        renderScalePath(r, circleDiv, scalePath, scaleName, scale);

        return data;
    },

    default: (data, e) => {
        const { scale, circleDiv } = data;
        circleDiv.classList.remove('gesturing');
    }
});

function toPosition(r, rotation, i) {
    const a = rotation + i * turn / 12;
    return toCartesian([r, a]);
}

function renderScalePath(r, circleDiv, scalePath, scaleName, scale) {
    const notes   = scale.notes;
    const objects = notes
    .map((note, i) => ({
        note,
        chord: scale.chords[i],
        index: fourthsIndexes.indexOf(note)
    }))
    .sort(by(get('index')));

    // Render path
    const pathData = objects
    .map((data) => toPosition(r - 1.8, (defaultTurn + fourthsIndexes.indexOf(scale.transpose) / 12) * turn, fourthsIndexes.indexOf(data.note)))
    .join('L');

    scalePath.setAttribute('d', 'M' + pathData + 'Z');

    objects
    .forEach((data) => {
        const n          = wrap(0, 12, data.note + scale.transpose);
        const noteButton = circleDiv.querySelector(`[value="${ n }"]`);
        const extension  = extToHTML(data.chord);
        const span       = create('span', { class: scaleName + " chord-extension", html: extension });
        noteButton.append(span);
    });
}

function renderScaleButton(shadow, scaleName, clearButton) {
    // Render button
    shadow
    .querySelectorAll(`[value="${ scaleName }"]`)
    .forEach((button) => button.classList.add('on'));

    // Enable clear
    clearButton.disabled = false;
}

export default {
    construct: function(shadow) {
        const circleDiv     = shadow.getElementById('circle');
        const settingsDiv   = shadow.getElementById('settings');
        const noteButtons   = shadow.querySelectorAll('.note-button');
        const scalePath     = shadow.getElementById('scale-path');
        const clearButton   = shadow.getElementById('clear-scale');
        const advancedInput = shadow.getElementById('advanced-settings');

        noteButtons.forEach((button) => {
            const pos = toPosition(r, defaultTurn * turn, fourthsIndexes.indexOf(parseInt(button.value, 10)));
            button.style.transform = `translate3d(calc(${ pos[0] }em - 50%), calc(${ pos[1] }em - 50%), 0)`;
        });

        let scaleName = localStorage.getItem('scale') || 'major';

        // Select scale
        if (scaleName && scaleName !== 'none') {
            const scale = scales[scaleName];
            renderScalePath(r, circleDiv, scalePath, scaleName, scale);
            scalePath.classList.add(scaleName);
            renderScaleButton(shadow, scaleName, clearButton);
        }

        events('click', shadow)
        .each(delegate({
            // Clicks on scale buttons illuminate the scale shape
            '[name="scale"]': (target, e) => {
                const scale = scales[target.value];

                // Reset
                if (!e.shiftKey) {
                    scalePath.classList.remove(scaleName);
                    shadow.querySelectorAll('.chord-extension').forEach((element) => element.remove());
                    shadow.querySelectorAll('.on').forEach((element) => element.classList.remove('on'));
                }

                // If no scale render nowt
                if (!scale) {
                    scalePath.removeAttribute('d');
                    clearButton.disabled = true;
                    localStorage.setItem('scale', 'none');
                    return;
                }

                // Cache current scale name
                scaleName = target.value;

                // Render
                renderScalePath(r, circleDiv, scalePath, scaleName, scale);
                scalePath.classList.add(scaleName);

                renderScaleButton(shadow, scaleName, clearButton);

                // Store selected
                localStorage.setItem('scale', scaleName);
            }
        }));

        // Rotate scale
        gestures({ select: 'path', threshold: 1 }, circleDiv)
        .each((pointerevents) => pointerevents.reduce(rotateScale, {
            r,
            shadow,
            circleDiv,
            scalePath,
            scaleName,
            scale: scales[scaleName],
            transpose: 0
        }));

        // Advanced settings show/hide state
        events('change', advancedInput)
        .each((e) => (e.target.checked ?
            localStorage.setItem('advancedSettings', e.target.checked) :
            localStorage.removeItem('advancedSettings')
        ));

        advancedInput.checked = localStorage.getItem('advancedSettings');
    },

    connect: function(shadow) {

    }
};
