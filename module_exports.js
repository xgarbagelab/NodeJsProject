module.exports.counter = (arr)=>{
  return 'There are '+arr.length + ' elementas in this array'
}

module.exports.adder = function(a,b){
  return `The sum of the 2 numbers is ${a+b}`
}

module.exports.pi = 3.14;
//for exporting single module
//module.exports= counter

//Export multiple module
//module.exports.counter= counter
//module.exports.adder= adder
//module.exports.pi= pi

//export multiple module

// module.exports={
//   counter:counter,
//   adder:adder,
//   pi:pi
// }
