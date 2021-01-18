const { response } = require('express');
var express = require('express')

var app = express()

app.set('view engine', 'ejs')
//path in link in html and a directory where static files are located
app.use('/public', express.static('public'))

app.get('/home', (request, response) => {
    response.send('This is home')
})
app.get('/profile', (request, response) => {
    response.send('This is profile')
})
// app.get('/home/:id/:name', (request, response) => {
//     response.send(`Here is ${request.params.id} and her name is ${request.params.name}`)
// })
app.get('/profile/:id/:name', (request, response) => {
    var obj = {
        id: request.params.id,
        name: request.params.name,
        massive: [1,2,3,4,5,6],
        info: {
            sex: 'female',
            age: 18
        }
    }
    response.render('main', obj)
})
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});
app.post('/dataform',urlEncodedParser, (request, response) => {
    if(!request.body) return response.sendStatus(400)
    console.log(request.body)
    response.render('dataform', {data: request.body})
})
app.listen(3000);