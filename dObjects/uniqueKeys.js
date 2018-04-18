var unique = require('../dArrays/unique').unique;
var keys   = require('./keys').keys;

/**
 * Get unique keys from n amount of objects.
 *
 * @alias module:dObjects.uniqueKeys
 * @param  {Array} objs Objects to get keys from.
 * @return {Array}      Unique keys of the objects.
 */
module.exports.uniqueKeys = function(objs) {
    return unique(keys.apply(null, arguments));
};