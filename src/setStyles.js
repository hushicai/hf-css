/**
 * @file setStyles
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var setStyle = require('./setStyle');

        function setStyles(element, styles) {
            for (var key in styles) {
                if (styles.hasOwnProperty(key)) {
                    setStyle(element, key, styles[key]);
                }
            }
        }

        return setStyles;
    }
);
