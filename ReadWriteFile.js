var fs = require('fs')


//Sync version fo read and write method
//Read File
// var readme = fs.readFileSync('readme.txt','utf8') //It is sync version i.e blocking code mean it will move to next line after completing his job
// console.log(readme)


//Write File

// var readme = fs.readFileSync('readme.txt','utf8')
//
// fs.writeFileSync('writeMe.txt',readme)//It is sync version i.e blocking code mean it will move to next line after completing his job
// fs.writeFileSync('writeMe.txt',readme+"cde") //Concat addition text if required

//Async version fo read and write method

//read file
// fs.readFile('readme.txt','utf8',function(err,data){
//   console.log(data);
// })

//write file
// var data = "Hello !"
//
// // write data to file sample.html
// fs.writeFile('sample.txt',data,
//     // callback function that is called after writing file is done
//     function(err) {
//         if (err) throw err;
//         // if no error
//         console.log("Data is written to file successfully.")
// });
