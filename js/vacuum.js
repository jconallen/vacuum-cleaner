class Vacuum {
	
	constructor( algorithm ) {
		this._algorithm = algorithm;
		this._sensors = sensors;
		this._actions = actions;
	}
	
	init( row, col, algorithm, environment ){
		this._algorithm = algorithm;
		this._row = row;
		this._col = col;
	}
	
	setPosition( row, col ){
		this._row = row;
		this._col = col;	
	}
	
	setAlgorithm(algorithm){
		this._algorithm = algorithm;
	}
	
	// SENSORS =====================================================================
	


	// ACTIONS =====================================================================
	
	action_suck(){
		this._energy += 1;
	}

	action_move(direction){
	
	}
	
	action_moveRandom(){
		var moves = "";
		
	}

	
	randomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	

	
}
