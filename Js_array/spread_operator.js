//spread operator(....)
//with array
const array = [1,2]
const combined = [...array,3,4];
console.log(combined)

//Spread Operators for Objects

const obj = {
  name:'Maddy',
  author:'Madhusudan'
}

//Spread Operators For Functions
const combined2={
  ...obj,
  age:25
}

console.log(combined2)

const multiplication = (x,y,z,a,b)=>{
  return x * y * z * a * b
}
const a=1;
const b=2;
const c=[3,4,5]
const output = multiplication(a,b,...c)
console.log(output)

//Spread Operator Only for iterables
//it will throw an arrow because we can use spread oper with iterable object
const obj2 = {'name': 'Ankit','age':'25'};
const ob3 = [...obj2];
console.log(ob3);
