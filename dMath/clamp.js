/**
 * Clamp a number between a minimum and a maximum value.
 *
 * @alias module:dMath.clamp
 * @param  {Number} val Value to clamp.
 * @param  {Number} min Minimum acceptable value.
 * @param  {Number} max Maximum acceptable value.
 * @return {Number}     Minimum, maximum or the original value.
 */
module.exports.clamp = function(val, min, max) {
    return val < min ? min : val > max ? max : val;
};