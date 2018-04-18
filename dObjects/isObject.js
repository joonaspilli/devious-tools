var isArray = require('../dArrays/isArray').isArray;

/**
 * Check if a value is an object.
 *
 * @alias module:dObjects.isObject
 * @param  {Any}     val Value to check.
 * @return {Boolean}     Is the value an object.
 */
module.exports.isObject = function(val) {
    return (typeof(val) === 'object' && val !== null && !isArray(val));
};