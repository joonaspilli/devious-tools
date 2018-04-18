/**
 * Copy enumerable properties from objects to target object. Works pretty much
 * like Object.assign from ES6.
 *
 * @alias module:dObjects.assign
 * @param  {Object} target Object to copy to.
 * @param  {Object} src    Objects to copy from.
 * @return {Object}        The target object.
 */
module.exports.assign = function(target, src) {
    var assigned = new Object(target);

    for (var i = 1, n = arguments.length; i < n; ++i) {
        var nextObj = arguments[i];
        if (nextObj == null) continue;

        for (var key in nextObj) assigned[key] = nextObj[key];
    }

    return assigned;
};