var song;
var button;

function setup() {
	createCanvas( 200, 200 );
	button = createButton( "Play" );
	song = loadSound( "track.mp3", loaded );
	button.mousePressed( togglePlaying );
}

function loaded() {
	console.log( "loaded" );
}

function draw() {
	background( 0 );
}

function togglePlaying() {
	if ( !song.isPlaying() ) {
		song.play();
		song.setVolume( 0.1 );
		button.html( "Pause" );
	} else {
		song.pause();
		button.html( "Play" );
	}
}