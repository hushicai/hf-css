/**
 * @file setStyle
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var camelize = require('hf-util/camelize');
        var isNumber = require('hf-type/isNumber');
        var fixer = require('./fixer');
        var unit = require('./unit');

        function setStyle(element, property, value) {
            if (isNumber(value)) {
                value = value + unit(property);
            }
            property = camelize(property);
            if (fixer[property]) {
                property = fixer[property];
            }
            element.style[property] = value;
        }

        return setStyle;
    }
);
