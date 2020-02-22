var http = require('http')
var fs = require('fs')

var http = require('http')

var server = http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'application/json'})
  var myObj = {
    name :'Ryu',
    job: 'Ninja',
    age:29
  }
  res.end(JSON.stringify(myObj))

})

server.listen(3000,'127.0.0.1')
console.log('I am Listening Now @ Port:3000')
