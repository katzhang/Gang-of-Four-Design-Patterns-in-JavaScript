/*
*
*Stackoverflow: http://stackoverflow.com/questions/1479319/simplest-cleanest-way-to-implement-singleton-in-javascript
*
*/

var SingletonClass = (function() {

	//Constructor function
	function SingletonClass() {};

	var instance;

	return {
		getInstance: function() {
			if (!instance) {
				instance = new SingletonClass();
				//Hide the constructor so the returned object can't be new'd
				instance.constructor = null;
			}

			return instance;
		}
	};
})();

/*
Be careful with singletons.

Singletons can easily hide code dependencies as they provide global access for other code; try to pass them in rather than
directly call them.

*/