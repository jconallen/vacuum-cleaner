class Position {
	constructor( row, col ) {
		this.row = row;
		this.col = col;
	};
	
	
	isNextTo(otherPosition) {
		if( this.row == otherPosition.row ) {
			return ( this.col == otherPosition.col+1 || this.col == otherPosition.col-1 );
		} else if( this.col == otherPosition.col ) {
			return ( this.row == otherPosition.row+1 || this.row == otherPosition.row-1 );
		}
		return false;
	}
}