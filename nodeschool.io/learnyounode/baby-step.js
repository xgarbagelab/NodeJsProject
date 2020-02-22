//Offcial solution
// 'use strict'
//
//
//     let result = 0
//
//     for (let i = 2; i < process.argv.length; i++) {
//       result += Number(process.argv[i])
//     }
//
//     console.log(result)


//My Solution
function myArgs(args){
  let sum=0
  // for(let i=2;i<args.length;i++){
  for(let i=0;i<args.length;i++){
     sum=sum+parseInt(args[i])
  }
  console.log(sum)
}

// myArgs(process.argv)
myArgs(process.argv.slice(2))
