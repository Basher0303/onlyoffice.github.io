var dictionaries = {
    en: [],
    ru: []
};

Object.keys(dictionaries).forEach(function(dict) {
    var script = document.createElement('script');
    script.src = 'scripts/dictionaries/' + dict + '.js';
    document.head.appendChild(script);
});