var things = require('./things')
var emit = require('./eventEmit')
console.log(things.length_array([4,7,6,5,4])) //5
console.log(things.multiply(2,4)) //8
emit.bmw.emit('speed', 234)