// Remove duplicates from an array

var fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];


// First method
var uniqueFruits = Array.from(new Set(fruits));
console.log(uniqueFruits); // returns ['banana', 'apple', 'orange', 'watermelon', 'grape']
// Second method
var uniqueFruits2 = [...new Set(fruits)];
console.log(uniqueFruits2); // returns ['banana', 'apple', 'orange', 'watermelon', 'grape']
