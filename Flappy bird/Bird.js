function Bird() {
	this.x = 50;
	this.y = height / 2;
	this.show = function() {
		fill( 255 );
		noStroke();
		ellipse( this.x, this.y, 25, 25 );
	}
	this.acceleration = 0.6;
	this.velocity = 0;
	this.lift = -10;
	this.drop = function() {
		// this.acceleration = 0.1;
		this.velocity += this.acceleration;
		this.y += this.velocity;
		if ( this.y > height ) {
			this.velocity = 0;
			this.y = height;
		}
		if ( this.y < 0 ) {
			this.velocity = 0;
			this.y = 0;
		}
		// console.log( "drop : ", this.y );
	}
	this.jump = function() {
		this.velocity += this.lift;
	}
}