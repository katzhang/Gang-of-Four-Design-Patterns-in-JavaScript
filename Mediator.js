/*
Mediator Pattern: https://gist.github.com/addyosmani/1794823
*/
var mediator = (function(){
     var subscribe = function(channel, fn){
          if(!mediator.channels[channel]) mediator.channels[channel] = [];
          mediator.channels[channel].push({ context : this, callback : fn });
          return this;
     };
     var publish = function(channel){
          if(!mediator.channels[channel]) return false;
          var args = Array.prototype.slice.call(arguments, 1);
          for(var i = 0, l = mediator.channels[channel].length; i < l; i++){
               var subscription = mediator.channels[channel][i];
               subscription.callback.apply(subscription.context.args);
          };
          return this;
     };
     return {
          channels : {},
          publish : publish,
          subscribe : subscribe,
          installTo : function(obj){
               obj.subscribe = subscribe;
               obj.publish = publish;
          }
     };
}());

/* Examples of Usage */
// Example 1
mediator.name = 'Doug';
mediator.subscribe('nameChange', function(arg){
     console.log(this.name);
     this.name = arg;
     console.log(this.name);
});
 
mediator.publish('nameChange', 'Jorn');
 
 
// Example 2
var obj = { name : 'John' };
mediator.installTo(obj);
 
obj.subscribe('nameChange', function(arg){
     console.log(this.name);
     this.name = arg;
     console.log(this.name);
});
 
obj.publish('nameChange', 'Sam');

/* 
Differences between event aggregator pattern and mediator pattern
http://lostechies.com/derickbailey/2013/03/18/event-aggregator-andorvs-mediator-a-tale-of-two-patterns/
*/

