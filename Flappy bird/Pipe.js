function Pipe() {
	this.sep = random( 50, height / 2 );
	this.pos = random( this.sep, height - this.sep );
	this.top = this.pos - this.sep / 2;
	this.bottom = this.pos + this.sep / 2;
	this.x = width;
	this.speed = 1;
	this.slide = function() {
		this.x -= frameCount * 0.1;
		// console.log( this.x );̥
	}
	this.highlight = false;
	this.hit = function( bird ) {
		if ( bird.y < this.top || bird.y > height - this.bottom ) {
			if ( bird.x > this.x && bird.x < this.x + this.w ) {
				highlight = true;
				return true;
			}
			highlight = false;
			return false;
		}
	}
	this.show = function() {
		fill( 255 );
		noStroke();
		if ( this.highlight ) {
			fill( 0, 255, 0 );
		}
		rect( this.x, 0, 40, this.top );
		rect( this.x, this.bottom, 40, height - this.bottom );
	}
	this.offScreen = function() {
		if ( this.x < -40 ) {
			return true;
		} else {
			return false;
		}
	}
}