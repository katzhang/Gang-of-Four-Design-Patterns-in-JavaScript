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
