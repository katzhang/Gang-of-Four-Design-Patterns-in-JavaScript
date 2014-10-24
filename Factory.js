/* Sample code rewritten from the book: the createMaze method */
var mazeGame = (function() 
	//A bunch of factory methods
	function makeMaze() {
		return new Maze();
	}

	function makeRoom(n) {
		return new Room(n);
	}
	....

	return {
		createMaze: function() {
			var maze = makeMaze();
			var room1 = makeRoom(1);

			maze.addRoom(room1);

			....
		}
	}
}());

/*
Essential JS Design Patterns: http://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript
example of how a Vehicle Factory is implemented
*/
function Car (options) {};

function Truck(options) {};

//Define a skeleton vehicle factory
function VehicleFactory() {};

//By default it is Car
VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function (options) {
	switch(options.vehicleType) {
		case "car":
			this.vehicleClass = Car;
			break;
		case "truck":
			this.vehicleClass = Truck;
			break;
	}

	return new this.vehicleClass(options);

}

//Usage
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
	vehicleType: 'car'
})

//Scenario 1: modify a VehicleFactory instance to use the Truck class
var truck = carFactory.createVehicle({
	vehicleType: 'truck'
})

//Scenario 2: subclass VehicleFactory class to create a factory that builds trucks
function TruckFactory() {};

TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;






































