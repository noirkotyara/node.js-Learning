var fs = require('fs')
var http = require('http')



var server = http.createServer((request, response) => {
    var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8')
    console.log(`${request.method}`)
    response.writeHead(200, { 'Content-Type': 'text/json; charset=utf-8' });
var obj = {
    model: 'diana',
    height: 173,
    sex: 'female'
}
    //it is for html or plain response
    // myReadShort.pipe(response);
    response.end(JSON.stringify(obj))

})
server.listen(3000)
