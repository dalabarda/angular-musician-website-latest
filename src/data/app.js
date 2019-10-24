// Exercise #1
// var Emitter = require('./emitter');
var Emitter = require('events');
var config = require('./config').events;


var emtr = new Emitter();

// emtr.on('greet', function() {
emtr.on(config.GREET, function() {
  console.log('Somewhere, someone said hello.');
});

// emtr.on('greet', function() {
emtr.on(config.GREET, function() {
  console.log('A greeting occurred!');
});

console.log('Hello!');
// emtr.emit('greet');
emtr.emit(config.GREET);



// magic string: a string that has some special meaning in our code.
// relying on strings can be problematic. hard to debug.

// Exercise #2
// EVENT EMITER IN JS - Inheriting from Event Emitter
// INHERITING FROM EVENT Emitter
var EventEmitter = require('events');
var util = require('util');

// Greetr inherits from event emitter
function Greetr() {
  this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  this.emit('greet', data)
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
  console.log('Someone greeted!');
})

greeter1.greet('Tony');

// CALL AND APPLY METHODS

var obj = {
  name: 'John Doe',
  greet: function(params) {
    console.log(`Hello ${ this.name }`);
  }
}

obj.greet();
//  Hello John Doe
obj.greet.call({ name: 'Jane Doe'}, params1, params2 ...);
obj.greet.apply({ name: 'Jane Doe'}, [params1, params2 ...]);


// read more about the idea of "supper constructor" in other programing languages