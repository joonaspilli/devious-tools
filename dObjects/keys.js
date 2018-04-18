/**
 * Get keys from n amount of objects.
 *
 * @alias module:dObjects.keys
 * @param  {Object} obj Objects to get keys from.
 * @return {Array}      Keys of the objects.
 */
module.exports.keys = function(objs) {
    var keys = [];
    var j = 0;

    for (var i = 0, n = arguments.length; i < n; ++i) {
        for (var key in arguments[i]) {
            keys[j++] = key;
        }
    }

    return keys;
};