var http = require('http')

var server = http.createServer((request, response) => {
    if(request.url === "/hello"){
        response.statusCode = 302; // временная переадресация
        // на адрес localhost:3000/newpage
        response.setHeader("Location", "/newpage");
    }
    console.log(`${request.headers['user-agent']}`)
    console.log(`${request.method}`)
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    response.end('Hello world')
})
server.listen(3000)