/**
 * Remove duplicate values from an array.
 *
 * @alias module:dArrays.unique
 * @param  {Array} a Target array.
 * @return {Array}   A copy of the target array, removed of duplicate values.
 */
module.exports.unique = function(a) {
    var met = {};
    var uniques = [];
    var j = 0;

    for (var i = 0, n = a.length; i < n; ++i) {
        var val = a[i];

        if (typeof(met[val]) === 'undefined') {
            met[val] = val;
            uniques[j++] = val;
        }
    }

    return uniques;
};