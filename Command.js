/*
Command pattern provides us a means to separate the responsibilities of issuing commands from anything executing commands,
delegating this responsibility to different objects instead.

Accept any named methods that can be performed on the carManager object, passing along any data that might be used such as
the Car model and ID.
*/

//Old method: if directly call these methods will result tight coupling -- changing the API requires changing these methods too.
(function() {
	var carManager = {

		//request information 
		requestInfo: function(model, id) {
			return "The information for " + model + " with ID " + id + " is foobar";
		},

		//purchase the car
		buyVehicle: function(model, id) {
			return "You have successfully purchased Item " + id + ", a " + model;
		},

		//arrange a viewing
		arrangeViewing: function(model, id) {
			return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
		}
	}
})();

//Command pattern:
carManager.execute = function ( name ) {
    return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1) );
};

//Sample calls:
carManager.execute( "arrangeViewing", "Ferrari", "14523" );
carManager.execute( "requestInfo", "Ford Mondeo", "54323" );
carManager.execute( "requestInfo", "Ford Escort", "34232" );
carManager.execute( "buyVehicle", "Ford Escort", "34232" );

