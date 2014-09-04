// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Element class:
	Element = require( 'minimal-element-class' ),

	// Module to be tested:
	createSVGElement = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'minimal-svg-element', function tests() {
	'use strict';

	// SETUP //

	var element;

	beforeEach( function() {
		element = createSVGElement( 'svg' );
	});

	// TESTS //

	it( 'should export a function', function test() {
		expect( createSVGElement ).to.be.a( 'function' );
	});

	it( 'should require an element name', function test() {
		expect( foo ).to.throw( Error );
		function foo() {
			createSVGElement();
		}
	});

	it( 'should not allow a non-string element name', function test() {
		var values = [
				5,
				true,
				null,
				undefined,
				NaN,
				function(){},
				[],
				{}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				createSVGElement( value );
			};
		}
	});

	it( 'should not allow an invalid element name', function test() {
		expect( foo ).to.throw( Error );
		function foo() {
			createSVGElement( 'unrecognized-element-name' );
		}
	});

	it( 'should create a new SVG element', function test() {
		assert.ok( element instanceof Element );
	});

});