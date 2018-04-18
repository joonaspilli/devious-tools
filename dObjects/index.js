/**
 * @module dObjects
 */
module.exports.dObjects = {
    assign     : require('./assign').assign,
    deepMerge  : require('./deepMerge').deepMerge,
    difference : require('./difference').difference,
    isEmpty    : require('./isEmpty').isEmpty,
    isObject   : require('./isObject').isObject,
    keys       : require('./keys').keys,
    uniqueKeys : require('./uniqueKeys').uniqueKeys,
    withValue  : require('./withValue').withValue
};