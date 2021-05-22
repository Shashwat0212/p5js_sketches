let v;
var hu = 0;
var rad = 0;

function setup() {
	createCanvas( 640, 360 );
	v = new Vehicle( width / 2, height / 2 );
	colorMode( HSB );
}

function draw() {
	background( 51 );

	let mouse = createVector( mouseX, mouseY );

	// Draw an ellipse at the mouse position̥̥
	// var hu = 0;
	hu += 1;
	if ( hu > 255 )
		hu = 0;
	fill( hu, 255, 255 );
	stroke( hu );
	strokeWeight( 2 );
	rad += 1;
	if ( rad > 48 )
		rad = 0;
	ellipse( mouse.x, mouse.y, rad, rad );

	// Call the appropriate steering behaviors for our agents
	v.seek( mouse );
	v.update();
	v.display( hu );

}