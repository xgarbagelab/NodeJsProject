//Convert array to an object

var fruits = ['banana','apple','orange','watermelon']
var fruitsObj = {...fruits}
console.log(fruitsObj) // returns {0: 'banana', 1: 'apple', 2: 'orange', 3: 'watermelon', 4: 'apple', 5: 'orange', 6: 'grape', 7: 'apple'}

fruits.length = 0
console.log(fruits)
