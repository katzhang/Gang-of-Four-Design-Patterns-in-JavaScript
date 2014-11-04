/* Sample code: http://www.dofactory.com/javascript/adapter-design-pattern */

//Old interface
function Shipping() {
	this.request = function(zipStart, zipEnd, weight) {
		//...
		return '$49.75';
	}
}

//New interface
//Adaptee: the object being adapted, has a different interface from what the client expects or knows: no request method
function AdvancedShipping() {
	this.login = function(credentials) { /*..*/ };
	this.setStart = function(start) { /*..*/ };
	this.setDestination = function(destination) { /*..*/ };
	this.calculate = function(weight) { return '$39.50' };
}

//Adapter interface
//Adapter: implements the interface that the client expects to know
function ShippingAdapter(credentials) {
	var shipping = new AdvancedShipping();

	shipping.login(credentials);

	return {
		request: function(zipStart, zipEnd, weight) {
			shipping.setStart(zipStart);
			shipping.setDestination(zipEnd);
			return shipping.calculate(weight);
		}
	}
}

//Client: calls into Adapter to request a service
function run() {
	var shipping = new Shipping();
	var credentials = {token: 'dijfowje'};
	var adapter = new ShippingAdapter(credentials);

	//Old shipping object and interface
	var cost = shipping.request('12345', '11373', '2 lbs');

	//New shipping object with adapated interface
	cost = adapter.request('12345', '11373', '2 lbs');
}