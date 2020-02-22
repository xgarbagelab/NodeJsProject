var http = require('http')
var fs = require('fs')

let myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8')
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt','utf8')

myReadStream.on('data',function(chunk){
  console.log('new chunk received:')
  myWriteStream.write(chunk)
})
