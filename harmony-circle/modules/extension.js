
export function extToHTML(extension) {
    return extension
    .replaceAll(/(∆|maj)|(-|–|min)|(ø)|(˚|dim)|(\+|aug)|(b|♭)|(#|♯)|(sus)|(alt)|(\d+(?:\/\d+)?)/g, ($0, $maj, $min, $hdim, $dim, $aug, $flat, $sharp, $sus, $alt, $num) => (
        $maj ?   '<span class="maj-symbol symbol">△</span>' :
        $min ?   '<span class="min-symbol symbol">-</span>' :
        $hdim ?  '<sup class="hdim-symbol symbol">∅</sup>' :
        $dim ?   '<span class="dim-symbol symbol">°</span>' :
        $aug ?   '<sup class="aug-symbol symbol">＋</sup>' :
        $flat ?  '<sup class="flat-symbol symbol">♭</sup>' :
        $sharp ? '<sup class="sharp-symbol symbol">♯</sup>' :
        $sus ?   '<span class="sus-symbol symbol">sus</span>' :
        $alt ?   '<span class="alt-symbol symbol">alt</span>' :
        $num ?   `<sup class="num-symbol symbol">${ $num }</sup>` :
        ''
    ));
}
