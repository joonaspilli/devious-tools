var assign   = require('./assign').assign;
var isObject = require('./isObject').isObject;
var isEmpty  = require('./isEmpty').isEmpty;

/**
 * Export enumerable keys of value from an object.
 *
 * @alias module:dObjects.withValue
 * @param  {Object}  obj                      Object to export from.
 * @param  {Object}  opts                     Options for exporting.
 * @param  {Boolean} opts.numbersAsBools      Should numbers be treated as
 *                                            booleans. Defaults to false.
 * @param  {Boolean} opts.includeFalse        Should false booleans be included.
 *                                            Defaults to false.
 * @param  {Boolean} opts.includeEmptyStrings Should strings with no length be
 *                                            included. Defaults to false.
 * @param  {Boolean} opts.includeUndefined    Should keys of type "undefined" be
 *                                            included. Defaults to false.
 * @param  {Boolean} opts.includeNull         Should keys of type null be
 *                                            included. Defaults to false.
 * @param  {Boolean} opts.includeEmptyObjects Should objects with no enumerable
 *                                            keys be included. Defaults to
 *                                            false.
 * @return {(Object|Null)}                    An object containing the exported
 *                                            values or null if none were found.
 */
module.exports.withValue = function(obj, opts) {
    var withVal = {};
    opts = assign({
        numbersAsBools      : false,
        includeFalse        : false,
        includeEmptyStrings : false,
        includeUndefined    : false,
        includeNull         : false,
        includeEmptyObjects : false
    }, opts);

    for (var key in obj) {
        var val  = obj[key];
        var type = typeof(val);
        var add  = false;

        switch (type) {
            case 'string':
                if (val.length > 0 || opts.includeEmptyStrings) add = true;
                break;

            case 'number':
                if (opts.numbersAsBools || val) add = true;
                break;

            case 'boolean':
                if (val || opts.includeFalse) add = true;
                break;

            case 'undefined':
                if (opts.includeUndefined) add = true;
                break;

            case 'object':
                if (val === null) {
                    if (opts.includeNull) add = true;
                } else if (opts.includeEmptyObjects || !isEmpty(val)) {
                    add = true;
                }
                break;
        }

        if (add) withVal[key] = val;
    }

    return isEmpty(withVal) ? null : withVal;
};