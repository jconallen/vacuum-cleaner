class Environment {
	
	constructor(data) {
		if( data === undefined ) {
			this._vac_row = -1;
			this._vac_col = -1;
			this._energy = 0;
			this._cost_suck = 2;
			this._cost_move = 1;
			
			// use accesible state
			this.state = {};
			
			// initialize grid
			this._grid = new Array(10);
			for(var r = 0; r<10; r++ ){
				this._grid[r] = new Array(10);
			}
		} else {
			this.update(data);
		}
	}
	
	update(data){
		this._grid = data._grid;
		this._vac_row = data._vac_row;
		this._vac_col = data._vac_col;
		this._cost_suck = data._cost_suck;
		this._cost_move = data._cost_move;
		this._energy = data._energy;
	}
	
	// public methods for vacuum API
	
	energy(){
		return this._energy;
	}
	

	// end of public methods
	
	_set(row,col,val){
		if( 0<=row && row <=9 && 0<=col && col<=9 ) {
			this._grid[row][col] = val;
		} else {
			throw new Error(`Invalid grid location (${row},${col})`);
		}		
	}
	
	block(row,col){
		this._set(row,col,'B');
	}
	
	unblock(row,col){
		this._set(row,col,'');
	}
	
	addDirt(row,col){
		this._set(row,col,'D');
	}
	
	removeDirt(row,col){
		this._set(row,col,'');
	}
	
	setVacuum(row,col){
		if( 0<=row && row <=9 && 0<=col && col<=9 ) {
			if( this.canNavigate(row,col) ){
				this._vac_row = row;
				this._vac_col = col;
			} else {
				throw new Error(`Block move (${row},${col})`);
			}
		} else {
			throw new Error(`Invalid grid location (${row},${col})`);
		}		
	}
	
	grid(row, col){
		if( 0<=row && row <=9 && 0<=col && col<=9 ) {
			if( row == undefined ) {
				row = this._vac_row;
			}
			if( col == undefined ) {
				col = this._vac_col;
			}
			return this._grid[row][col];
		}
		throw new Error(`Invalid grid location (${row},${col})`);
	}
	
	isVacuum(row, col){
		if( 0<=row && row <=9 && 0<=col && col<=9 ) {
			return ( this._vac_row == row && this._vac_col == col );
		}
		return false;
	}

	energy(){
		return this._energy;
	}
	
	isDirty(){
		if( 0<=this._vac_row && this._vac_row<=9 && 0<=this._vac_col && this._vac_col<=9 ) {
			return ( this._grid[this._vac_row][this._vac_col] == 'D' );
		} 
		return false;
	}
	
	suck(){
		this._energy += 1;
		var row = this._vac_row;
		var col = this._vac_col;
		if( 0<=row && row <=9 && 0<=col && col<=9 ) {
			if( this._grid[row][col] == "D" ){
				this._grid[row][col] = "";
			}
		}
	}
	
	canNavigate(row,col){
		if( 0<=row && row <=9 && 0<=col && col<=9 ) {
			return ( this._grid[row][col] != "B" );
		}
		return false;
	}
	
	moveUp(){
		this.setVacuum(this._vac_row-1,this._vac_col);
		this._energy += this._cost_move;
	}
	
	moveDown(){
		this.setVacuum(this._vac_row+1,this._vac_col);
		this._energy += this._cost_move;
	}
	
	moveLeft(){
		this.setVacuum(this._vac_row,this._vac_col-1);
		this._energy += this._cost_move;
	}
	
	moveRight(){
		this.setVacuum(this._vac_row,this._vac_col+1);
		this._energy += this._cost_move;
	}
	
}


