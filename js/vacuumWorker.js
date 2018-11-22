function log(msg){
	postMessage( { "log": msg } );
}


onmessage = function(e){
	
	if( typeof(Environment) == "undefined" ) {
		self.importScripts('environment.js', 'sensor.js', 'action.js');
	}

	if( e.data.algorithm != undefined ) {
		
		var environment = new Environment(e.data.environment);
		var sensor = new Sensor(environment);
		var action = new Action(environment);
		
		var msg = "";
		try{
			eval(e.data.algorithm);
		} catch( err ) {
			log( `ERROR: ${err.message}` );
			return;
		}
		
		
		postMessage( { "environment": environment } );

	}

};



