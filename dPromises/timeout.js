/**
 * Make a promise "timeout".
 *
 * @alias module:dPromises.timeout
 * @param  {Promise} p   Target promise.
 * @param  {Number}  t   Timeout delay.
 * @param  {Any}     err Promise's catch-block payload upon timeout.
 * @return {Promise}     A new promise that either resolves or rejects with the
 *                       payload of the original promise or with the specified
 *                       timeout error.
 */
module.exports.timeout = function(p, t, err) {
    var timeout = new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject(err);
        }, t);
    });

    return Promise.race([ p, timeout ]);
};