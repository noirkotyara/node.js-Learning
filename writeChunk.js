var fs = require('fs')
var myReadShort = fs.createReadStream(__dirname + '/text.txt', 'utf8')
var myWriteShort = fs.createWriteStream(__dirname + '/new.txt', 'utf8')
// myReadShort.on('data', chunk => console.log(`----------------------------------\n ${chunk}`))
//зчитує дані з файлу і перезаписує їх в новий
myReadShort.on('data', chunk => {
    console.log('done');
    myWriteShort.write(chunk)
})
