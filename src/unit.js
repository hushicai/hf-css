/**
 * @file unit
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var reg = /width|height|top|left|right|bottom|margin|padding/i;
        function unit(key) {
            if (reg.test(key)) {
                return 'px';
            }
            return '';
        }
        return unit;
    }
);
