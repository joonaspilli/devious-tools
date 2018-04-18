/**
 * Make a "cancelable" promise.
 *
 * @alias module:dPromises.cancelable
 * @param  {Promise} p Promise to wrap.
 * @return {Object}    An object containing the original promise and a
 *                     cancel-function.
 */
module.exports.cancelable = function(p) {
    var cancelled = false;

    return {
        cancel: function() {
            cancelled = true;
        },
        promise: p
        .then(function(payload) {
             return cancelled
                ? Promise.reject(payload)
                : Promise.resolve(payload);
        })
        .catch(function(err) {
            return cancelled
                ? Promise.reject({ _cancelled: true, _original: err })
                : Promise.reject(err);
        })
    };
};