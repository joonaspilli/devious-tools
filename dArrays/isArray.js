/**
 * Check if a value is an array.
 * Based on a polyfill available at {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Polyfill|MDN}.
 *
 * @alias module:dArrays.isArray
 * @param  {Object}  arg Value to check.
 * @return {Boolean}     Is the value an array.
 */
module.exports.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};