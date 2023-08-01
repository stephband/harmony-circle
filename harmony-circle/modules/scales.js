export default {
    'pentatonic': {
        notes:  [0,2,4,7,9],
        chords: ['6/9', '', '', '', '-11'],
        transpose: 0
    },

    'major': {
        notes:  [0,2,4,5,7,9,11],
        chords: ['∆', '-7', '7sus♭9', '∆♯11', '7', '-♭6', 'ø'],
        transpose: 0
    },

    'melodic-minor': {
        notes: [0,2,3,5,7,9,11],
        chords: ['-∆', '7sus♭9', '∆+', '7♯11', '7♭13', 'ø', '7alt'],
        transpose: 7
    },

    'diminished-arp': {
        notes: [0,3,6,9],
        chords: ['˚', '˚', '˚', '˚'],
        transpose: 1
    },

    'diminished': {
        notes: [0,1,3,4,6,7,9,10],
        chords: ['7♭9', '˚', '7♭9', '˚', '7♭9', '˚', '7♭9', '˚'],
        transpose: 0
    },

    'whole-tone': {
        notes: [0,2,4,6,8,10],
        chords: ['+7', '+7', '+7', '+7', '+7', '+7'],
        transpose: 0
    },

    'augmented-arp': {
        notes: [0,4,8],
        chords: ['+', '+', '+'],
        transpose: 0
    },

    'harmonic-major': {
        notes: [0,2,4,5,7,8,11],
        chords: ['', '', '', '', '', '', ''],
        transpose: 0
    },

    'harmonic-minor': {
        notes: [0,2,4,5,8,9,11],
        chords: ['∆+5', '-', '7♭9', '', '7', '-♭6', ''],
        transpose: 0
    },

    'double-harmonic-major': {
        notes: [0,1,4,5,7,8,11],
        chords: ['', '', '', '', '', '', ''],
        transpose: 0
    },

    'double-harmonic-minor': {
        notes: [0,2,4,5,8,9,10],
        chords: ['', '', '', '', '', '', ''],
        transpose: 0
    },
};
