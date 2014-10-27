/* Sample code rewritten from the book: the MazeBuilder class */
//MazeBuilder does not create mazes itself; its main purpose is just to define an interface for creating mazes.
//It defines empty implementations primarily for convenience. Subclasses of MazeBuilder do the actual work.
function MazeBuilder() {};

MazeBuilder.prototype.buildMaze = function() {};

MazeBuilder.prototype.buildRoom = function(n) {};

...


//New createMaze method
//The builder hides the internal representation of the Maze (classes that define rooms, doors, .etc)
//and how these parts are assembled to complete the final maze.
function createMaze(builder) {
	builder.buildMaze();
	builder.buildRoom(1);
}

//Reuse MazeBuilder to build different kinds of mazes
function createComplexMaze(builder) {
	builder.buildRoom(1001);
}

//Subclassing MazeBuilder
function StandardMazeBuilder() {};

StandardMazeBuilder.prototype = new MazeBuilder();

StandardMazeBuilder.prototype.buildRoom = function() {
	var room = new Room();
	return room;
}

/* Making Maze smaller makes it easier to understand
and modify, and StandardMazeBuilder is easy to separate from Maze. Most
importantly, separating the two lets you have a variety of MazeBuilders, each
using different classes for rooms, walls, and doors.*/