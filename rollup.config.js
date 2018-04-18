const CONFIG    = require('./config');
const path      = require('path');
const commonjs  = require('rollup-plugin-commonjs');
const uglify    = require('rollup-plugin-uglify');
const deepMerge = require('./dObjects/deepMerge').deepMerge;


////////////
// Set up //
////////////

// Options for merging configs.
const MERGE_OPTS = {
    mergeArrays  : true,
    mergeStrings : true
};


// Options shared by all bundles.
const SHARED_OPTS = {
    input: CONFIG.ENTRY,
    output: {
        file      : path.join(__dirname, CONFIG.OUTPUT, CONFIG.FILENAME),
        name      : CONFIG.NAME,
        exports   : 'named'
    },
    plugins: [ commonjs() ]
};


// Options shared by uglified bundles.
const UGLIFY_SHARED_OPTS = {
    output: {
        sourcemap : CONFIG.SOURCEMAPS
    },
    plugins: [ uglify() ]
};

/* ########################################################################## */

/////////////////////////////
// Creating bundle configs //
/////////////////////////////

// Normal ESM bundle config set up.
const NORMAL_BUNDLE_ES = deepMerge([ {}, SHARED_OPTS, {
    output: {
        file: '.esm.js',
        format: 'es'
    }
}], MERGE_OPTS);


// Normal UMD bundle config set up.
const NORMAL_BUNDLE_UMD = deepMerge([ {}, SHARED_OPTS, {
    output: {
        file: '.umd.js',
        format: 'umd'
    }
}], MERGE_OPTS);


// Uglified ESM bundle config set up.
const UGLIFIED_BUNDLE_ES = deepMerge([ {}, SHARED_OPTS, UGLIFY_SHARED_OPTS, {
    output: {
        file: '.esm.min.js',
        format: 'es'
    }
}], MERGE_OPTS);


// Uglified UMD bundle config set up.
const UGLIFIED_BUNDLE_UMD = deepMerge([ {}, SHARED_OPTS, UGLIFY_SHARED_OPTS, {
    output: {
        file: '.umd.min.js',
        format: 'umd'
    }
}], MERGE_OPTS);


module.exports = [
    NORMAL_BUNDLE_ES,
    NORMAL_BUNDLE_UMD,
    UGLIFIED_BUNDLE_ES,
    UGLIFIED_BUNDLE_UMD
];