var uniqueKeys = require('./uniqueKeys').uniqueKeys;
var clamp      = require('../dMath/clamp').clamp;
var isEmpty    = require('./isEmpty').isEmpty;

/**
 * Get differing values from two objects. Shallow.
 *
 * @alias module:dObjects.difference
 * @param  {Object} a    Object to compare.
 * @param  {Object} b    Object to compare.
 * @param  {Number} pref Which object to prefer in case of conflict.
 *                       Possible values are 0 for the first object and 1 for
 *                       the second object. Defaults to 1.
 * @return {Object}      An object containing the differing values.
 */
module.exports.difference = function(a, b, pref) {
    var diff = {};
    var keys = uniqueKeys(a, b);
    pref = arguments[
                typeof(pref) === 'undefined'
                ? 1
                : clamp(pref, 0, 1)
           ];

    for (var i = 0, n = keys.length; i < n; ++i) {
        var key = keys[i];
        var aVal = a[key];
        var bVal = b[key];

        if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
            if (aVal !== bVal) diff[key] = pref[key];
        } else {
            diff[key] = a.hasOwnProperty(key) ? aVal : bVal;
        }
    }

    return isEmpty(diff) ? null : diff;
};