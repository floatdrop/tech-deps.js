# tech-deps.js [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

Reads `{bem}.deps.js` file and writes `require` and `expect` fields.

## Usage

```js
var deps = require('tech-deps.js');

walker(['level']).pipe(deps);
```


[npm-url]: https://npmjs.org/package/tech-deps.js
[npm-image]: http://img.shields.io/npm/v/tech-deps.js.svg?style=flat

[travis-url]: http://travis-ci.org/floatdrop/tech-deps.js
[travis-image]: http://img.shields.io/travis/floatdrop/tech-deps.js.svg?branch=master&style=flat

[depstat-url]: http://david-dm.org/floatdrop/tech-deps.js
[depstat-image]: http://img.shields.io/david/floatdrop/tech-deps.js.svg?style=flat

[coveralls-url]: https://coveralls.io/r/floatdrop/tech-deps.js
[coveralls-image]: http://img.shields.io/coveralls/floatdrop/tech-deps.js.svg?style=flat
