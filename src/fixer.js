/**
 * @file fixer
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        return {
            'float': (function () {
                var div = document.createElement('div');
                var style = div.style;
                if ('cssFloat' in style) {
                    return 'cssFloat';
                }
                else if ('styleFloat' in style) {
                    return 'styleFloat';
                }
                return '';
            })()
        };
    }
);
