/**
 * Make possible for a function to be run a single time, e.g. when ran in a
 * loop.
 *
 * @alias module:dFunctions.singleRun
 * @param  {Function} f Function to wrap.
 * @return {Object}     An object with a run() -function that calls the
 *                      original function a single time.
 */
module.exports.singleRun = function(f) {
    var ran = false;

    return {
        run: function() {
            if (!ran) {
                ran = true;
                f.apply(null, arguments);
            }
        }
    };
};