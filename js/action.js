class Action {
	
	constructor( environment ) {
		this._environment = environment;
	}
	
	moveUp(){
		this._environment.moveUp();
	}
	
	moveDown(){
		this._environment.moveDown();
	}
	
	moveLeft(){
		this._environment.moveLeft();
	}
	
	moveRight(){
		this._environment.moveRight();
	}
	
	suck(){
		this._environment.suck();
	}
	
	moveRandom(){
		
		var dirs = "";
		var row = this._environment._vac_row;
		var col = this._environment._vac_col;
		if( this._environment.canNavigate(row+1,col) ) dirs += "D";
		if( this._environment.canNavigate(row-1,col) ) dirs += "U";
		if( this._environment.canNavigate(row,col+1) ) dirs += "R";
		if( this._environment.canNavigate(row,col-1) ) dirs += "L";
		
		var d = new Date();
		
		var no_directions = dirs.length;
		var index = this.randomInt(0, no_directions-1);

		console.log(d.getTime() + ": " + dirs + " index: " + index + "/" + no_directions );

		
		var dir = dirs.charAt(index);
		
		switch (dir) {
		case 'L':
			this.moveLeft();
			break;
		case 'R':
			this.moveRight();
			break;
		case 'U':
			this.moveUp();
			break;
		case 'D':
			this.moveDown();
			break;
		}
		
		
	}
	
	randomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
}