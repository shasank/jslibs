importScripts('../eslint/eslint.min.js');
importScripts('../eslint/eslint.config.js');

var code;
var version;
var ESLint = new eslint();

self.addEventListener('message', 
    function(event) {
        code = event.data.code;
        version = event.data.version;
      
        var errorMarkers = ESLint.verify(code, defaultConfig);
        self.postMessage({ errorMarkers, version });
    }
);

