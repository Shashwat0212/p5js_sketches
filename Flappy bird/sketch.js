var bird;
var pipes = [];
var mic;

function setup() {
	createCanvas( 400, 400 );
	frameRate( 30 );
	// background( 0 );̥̥̥̥̥
	bird = new Bird();
	pipes.push( new Pipe() );
	mic = new p5.AudioIn();
	mic.start();

}

function draw() {
	background( 0 );
	var vol = mic.getLevel();
	for ( var i = pipes.length - 1; i >= 0; i-- ) {
		pipes[ i ].show();
		pipes[ i ].slide();
		if ( pipes[ i ].hit( bird ) ) {
			console.log( "HIT" );
		}
		if ( pipes[ i ].offScreen ) {
			pipes.splice( i, 1 );
		}
	}

	bird.show();
	bird.drop();
	if ( frameCount % 100 == 0 ) {
		pipes.push( new Pipe() );
	}
	var y = map( vol, 0, 1, 0, 100 );
	console.log( y );
	if ( y > 1 ) {
		bird.jump();
	}
}