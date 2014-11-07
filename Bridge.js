/* 
Bridge pattern allows a client and a service to work together with each of them having its own interface --> two levels of abstraction
http://www.dofactory.com/javascript/bridge-design-pattern
*/
var Gestures = function (output) {
	this.output = output;
	this.tap = function () {
		this.output.click();
	}
	this.swipe = function() {
		this.output.move();
	}
}

var Mouse = function(output) {
	this.output = output;

	this.click = function() {
		this.output.click();
	}
	this.move = function() {
		this.output.move();
	}
}

var Screen = function() {
	this.click = function() {
		console.log('screen select');
	}
	this.move = function() {
		console.log('screen move');
	}
}

var Audio = function() {
	this.click = function() {
		console.log('sound oink');
	}
	this.move = function() {
		console.log('sound waves');
	}
}


function run() {
	var screen = new Screen();
	var audio = new Audio();

	var hand = new Gestures(screen);
	var mouse = new Mouse(audio);

	hand.tap();
	....
}





















