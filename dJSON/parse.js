/**
 * Parse JSON with try-catch.
 *
 * @alias module:dJSON.parse
 * @param  {String} str JSON to parse.
 * @return {Object}     An object with keys "data" and "error", containing
 *                      corresponding info.
 */
module.exports.parse = function(str) {
    var parsed, err;

    try {
        parsed = JSON.parse(str);
    } catch (e) {
        err = e;
    }

    return { data: parsed, error: err };
};