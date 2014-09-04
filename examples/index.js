var createSVGElement = require( './../lib' );

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