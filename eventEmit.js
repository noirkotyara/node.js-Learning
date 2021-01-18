var events = require('events');
var util = require('util');


var Car = function(model){
    this.model = model
}

util.inherits(Car, events.EventEmitter);

var bmw = new Car('BMW')
var merc = new Car('MERC')
var renau = new Car('RENAU')

var Array_of_cars = [bmw, merc, renau]
Array_of_cars.forEach((car) => {
    car.on('speed', (speed) => {console.log(`The speed is ${speed}`)})
})

// bmw.emit('speed', 234);

module.exports = {
    bmw
}
