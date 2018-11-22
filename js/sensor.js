class Sensor {
	
	constructor( environment ) {
		this._environment = environment;
	}
	
	canNavigate(row,col){
		if( 0<=row && row <=9 && 0<=col && col<=9 ) {
			return ( this._environment.grid(row,col) != 'B' );
		} 

		return false;
	}

	dirty(){
		return this._environment.isDirty();
	}
	
}