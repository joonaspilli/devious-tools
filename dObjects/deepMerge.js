var assign   = require('./assign').assign;
var isArray  = require('../dArrays/isArray').isArray;
var isObject = require('./isObject').isObject;

/**
 * Merge multiple nested objects into one. Useful e.g. for merging different
 * config-objects. Does not support non-enumerable properties or circular
 * references.
 *
 * @alias module:dObjects.deepMerge
 * @param  {Array}   objs              Objects to merge. The first object is the
 *                                     target to merge to. Latter objects are
 *                                     considered more important.
 * @param  {Object}  opts              Options for merging.
 * @param  {Boolean} opts.mergeArrays  Should arrays be merged. Defaults to
 *                                     false.
 * @param  {Boolean} opts.mergeStrings Should strings be merged. Defaults to
 *                                     false.
 * @param  {Number}  opts.maxDepth     Maximum depth/recursion for the merging
 *                                     process. Defaults to 32.
 * @return {Object}                    The target object.
 */
module.exports.deepMerge = function(objs, opts) {
    var target = objs[0];
    opts = assign({
        mergeArrays  : false,
        mergeStrings : false,
        maxDepth     : 32
    }, opts);

    for (var i = 1, n = objs.length; i < n; ++i) {
        target = merge(target, objs[i], opts, 0);
    }

    return target;
};

/**
 * !!! NOT MEANT TO BE CALLED DIRECTLY !!!
 * Called internally by the deepMerge-function.
 * 
 * Merge two nested objects recursively.
 *
 * @ignore
 * @param  {Object} a     Object to merge.
 * @param  {Object} b     Object to merge.
 * @param  {Object} opts  Options for merging, see above function.
 * @param  {Number} depth Current recursion.
 * @return {Object}       Merged object.
 */
var merge = function(a, b, opts, depth) {
    var toMerge = {};

    if (b != null) {
        for (var key in a) {
            var aVal = a[key];

            if (b.hasOwnProperty(key)) {
                var bVal = b[key];

                if (opts.mergeArrays &&
                    isArray(aVal) &&
                    isArray(bVal)) {
                    toMerge[key] = [].concat(aVal, bVal);
                } else if (opts.mergeStrings &&
                           typeof(aVal) + typeof(bVal) === 'stringstring') {
                    toMerge[key] = aVal + bVal;
                } else if (depth < opts.maxDepth &&
                           isObject(aVal) &&
                           isObject(bVal)) {
                    toMerge[key] = merge(aVal, bVal, opts, ++depth);
                }
            }
        }
    }

    return assign({}, a, b, toMerge);
};