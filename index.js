/*jslint node: true */
'use strict';
module.exports = function (arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Expected Array but received' + typeof arr);
    }

    return arr.sort(function () {
        return 0.5 - Math.random();
    });
};