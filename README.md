Minimal SVG Elements
====================
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Factory for creating minimal SVG elements.


## Installation

``` bash
$ npm install minimal-svg-element --save
```


## Usage

``` javascript
var createSVGElement = require( 'minimal-svg-element' );
```

To create a new SVG element,

``` javascript
var element = createSVGElement( '{{name}}' );
```

where `{{name}}` is a [valid SVG element name](https://github.com/element-io/svg-tags).

``` javascript
var element = createSVGElement( 'svg' );
```

The `element` instance has the following methods...

#### element.attr( [name, [value]] )

This method is a setter/getter. If no arguments are provided, returns an `object` containing all attribute-value pairs. If only a `name` is provided, returns the corresponding attribute `value`. If the attribute does not exist, returns `undefined`. If a `name` and `value` are provided, sets the attribute `value`.

``` javascript
// Set an attribute value:
element.attr( 'class', 'beep' );
element.attr( 'id', 'boop' );

// Get the `class` attribute's value:
element.attr( 'class' );
// Returns 'beep'

// Get all attribute value pairs:
element.attr();
// Returns {'class':'beep','id':'boop'}
```

Note: to set an attribute `value`, the `value` must be either a `string`, `boolean`, or `number`.


#### element.selfClosing()

Returns a `boolean` indicating if an element is a [self-closing element](http://www.w3.org/html/wg/drafts/html/master/syntax.html#elements-0).

``` javascript
element.selfClosing();
```

#### element.append( element )

Appends another element ([Element](https://github.com/element-io/element) or [Text](https://github.com/element-io/text) instance) to an `element`. If the `element` is a [self-closing element](http://www.w3.org/html/wg/drafts/html/master/syntax.html#elements-0), this method will throw an `Error`.

``` javascript
var el = createSVGElement( 'g' );

element.append( el );
```

When an `element` is serialized, nested elements are serialized in the order in which they were appended.


#### element.toString()

Serializes an `element` as a `string`.

``` javascript
element.toString();
// Returns '<tag>...</tag>'
```


## Examples

``` javascript
// Create a new svg canvas...

var canvas = createSVGElement( 'svg' );
canvas
	.attr( 'class', 'canvas' )
	.attr( 'width', 500 )
	.attr( 'height', 500 );

// Build layers...

var graph = createSVGElement( 'g' );
graph.attr( 'class', 'graph' );

var datum = createSVGElement( 'circle' );
datum
	.attr( 'class', 'datum' )
	.attr( 'cx', 100 )
	.attr( 'cy', 100 )
	.attr( 'r', 5 );

// Assemble the layers...

canvas.append( graph );
graph.append( datum );

// Serialize to string...

console.log( canvas.toString() );
// Returns: '<svg class="canvas" width="500" height="500"><g class="graph"><circle class="datum" cx="100" cy="100" r="5"></circle></g></svg>'
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

## Notes

When creating SVG elements, you are __encouraged__ to set the parent `svg` element [namespace](https://developer.mozilla.org/en-US/docs/Web/SVG/Namespaces_Crash_Course). Doing so enables user-agents to determine the XML tag dialect and properly render SVG elements.

``` javascript
var canvas = createSVGElement( 'svg' );

canvas
	.attr( 'xmlns', 'http://www.w3.org/2000/svg' )
	.attr( 'xmlns:xlink', 'http://www.w3.org/1999/xlink' )
	.attr( 'xmlns:ev', 'http://www.w3.org/2001/xml-events' );
```




## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.



[npm-image]: http://img.shields.io/npm/v/minimal-svg-element.svg
[npm-url]: https://npmjs.org/package/minimal-svg-element

[travis-image]: http://img.shields.io/travis/element-io/minimal-svg-element/master.svg
[travis-url]: https://travis-ci.org/element-io/minimal-svg-element

[coveralls-image]: https://img.shields.io/coveralls/element-io/minimal-svg-element/master.svg
[coveralls-url]: https://coveralls.io/r/element-io/minimal-svg-element?branch=master

[dependencies-image]: http://img.shields.io/david/element-io/minimal-svg-element.svg
[dependencies-url]: https://david-dm.org/element-io/minimal-svg-element

[dev-dependencies-image]: http://img.shields.io/david/dev/element-io/minimal-svg-element.svg
[dev-dependencies-url]: https://david-dm.org/dev/element-io/minimal-svg-element

[github-issues-image]: http://img.shields.io/github/issues/element-io/minimal-svg-element.svg
[github-issues-url]: https://github.com/element-io/minimal-svg-element/issues