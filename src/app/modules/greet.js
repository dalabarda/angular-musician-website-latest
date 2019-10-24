

// revealing module patern: 

var greeting = 'Hello world!!!';

function greet() {
  return this.greeting;
}

module.exports = {
  greet: greet
}

