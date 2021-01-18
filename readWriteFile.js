var fs = require('fs')

fs.readFile('text.txt', 'utf8', (err, data) => { console.log(data)})
console.log('I`m first')
fs.writeFile('something.txt', 'I`m here', (err, data) => { console.log('I`m third')})