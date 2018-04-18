/**
 * Check if an object has keys.
 *
 * @alias module:dObjects.isEmpty
 * @param  {Object}  obj Object to check.
 * @return {Boolean}     Is the object empty.
 */
module.exports.isEmpty = function(obj) {
    if (obj === null) return true;

    for (var key in obj) return false;

    return true;
};