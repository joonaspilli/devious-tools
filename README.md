# DeviousTools.js (1.0.1)

Another JavaScript utility library that you may or may not find useful.

## What is this?

A personal learning project and an evergrowing collection of utility functions mainly intended for the author's personal use.

## Installation

### Browser

``` html
<script src="devious-tools.umd.js"></script>
```

### Node.js

``` shell
$ npm i --save devious-tools
```

## Requiring/importing in Node.js

### CommonJS Modules:
``` javascript
// Get everything
const DeviousTools = require('devious-tools');

// Or a single module
// Path is constructed like so: 'devious-tools/<module name>'
const dObjects = require('devious-tools/dObjects').dObjects;

// Or just a single function
// Path is constructed like: 'devious-tools/<module name>/<function name>'
const deepMerge = require('devious-tools/dObjects/deepMerge').deepMerge;

// You can also use the prebuilt UMD-bundle, if you need to
const DeviousTools = require('./devious-tools.umd.js');
```

### ES Modules:
``` javascript
// Get everything
import DeviousTools from 'devious-tools';

// Or a single module
// Path is constructed like so: 'devious-tools/<module name>'
import { dObjects } from 'devious-tools/dObjects';

// Or just a single function
// Path is constructed like so: 'devious-tools/<module name>/<function name>'
import { deepMerge } from 'devious-tools/dObjects/deepMerge';

// You can also use the prebuilt ESM-bundle, if you need to
import DeviousTools from './devious-tools.esm.js';
```

When using webpack and ES modules, importing single modules or functions may cause errors. This is because webpack doesn't support mixing CJS and ESM -styled exporting/importing in modules. An easy solution is to just import the full library instead.

## Development

``` shell
# install dependencies
$ npm install

# build bundles
$ npm run build

# generate docs
$ npm run docs
```