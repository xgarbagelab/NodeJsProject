var http = require('http')
var fs = require('fs')

var http = require('http')

var server = http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/plain'})
  let myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8')
  myReadStream.pipe(res)
})

server.listen(3000,'127.0.0.1')
console.log('I am Listening Now @ Port:3000')
