/* Sample code rewritten from the book: a MazeFactory class */
function MazeFactory() {};

MazeFactory.prototype.makeMaze = function() {
	return new Maze();
};

MazeFactory.prototype.makeWall = function() {
	return new Wall();
};

MazeFactory.prototype.makeRoom = function(n) {
	return new Room(n);
};

....


//New version of createMaze: without hardcoding the component names,
//making it easier to create mazes with different components
var mazeFactory = new MazeFactory();

function createMaze(factory) {
	var maze = factory.makeMaze();
	var room1 = factory.makeRoom(1);
	....

	room1.setSide('north', factory.makeWall());
	....

};

createMaze(mazeFactory);

/* Old version of createMaze 
function createMaze() {
	var maze = new Maze();
	var room1 = new Room(1);
	...

	room1.setSide('north', new Wall());
	....
}*/

/* Scenario 1: we create EnchantedMazeFactory by subclassing MazeFactory */
function EnchantedMazeFactory() {};

EnchantedMazeFactory.prototype = new MazeFactory();

//Overwriting existing makeRoom method
EnchantedMazeFactory.prototype.makeRoom = function(n) {
	return new EnchantedRoom(n, castSpell());
}

/*Scenario 2: A maze game in which room can have a bomb set in it. */

function BombededMazeFactory() {};

BombededMazeFactory.prototype = new MazeFactory();

BombededMazeFactory.prototype.makeWall = function() {
	return new BombedWall();
};

BombededMazeFactory.prototype.makeRoom = function(n) {
	return new RoomWithABomb(n);
};

var bombedFactory = new BombededMazeFactory();

createMaze(bombedFactory);





































