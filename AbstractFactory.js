/* Sample code rewritten from the book: creating mazes. */
var MazeFactory = (function() {
	return {
		makeMaze: function() {
			return new Maze();
		},

		makeWall: function() {
			return new Wall();
		},

		makeRoom: function(n) {
			return new Room(n);
		},

		....
	}
}());

//New version of createMaze: without hardcoding the component names,
//making it easier to create mazes with different components
(function createMaze(factory) {
	var maze = factory.makeMaze();
	var room1 = factory.makeRoom(1);
	....

	room1.setSide('north', factory.makeWall());
	....

})(MazeFactory);

/* Old version of createMaze 
function createMaze() {
	var maze = new Maze();
	var room1 = new Room(1);
	...

	room1.setSide('north', new Wall());
	....
}*/








