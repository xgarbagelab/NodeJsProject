var fs = require('fs')

//Delete File

// fs.unlink('writeMe.txt', function (err) {
//     if (err) throw err;
//     // if no error, file has been deleted successfully
//     console.log('File deleted!');
// });

//sync Method creating and delete directory
//fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');

//async Method creating and delete directory
// fs.mkdir('stuff',function(){
//   fs.readFile('readMe.txt','utf8',function(err,data){
//     console.log(data)
//   })
// });
//To remove directory which is not empty
// fs.unlink('stuff/sample.txt',function(){
//   fs.rmdir('stuff')
// })
//remove empty directory
//fs.rmdir('./stuff')
