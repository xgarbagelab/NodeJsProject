//Replace the specific value in an array

var fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
fruits.splice(0, 2, 'potato', 'tomato');
console.log(fruits); // returns ['potato', 'tomato', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple']
/*3. Map array without .map()
Probably everyone knows .map() method of arrays, but there is a different solution which may be used to get a similar
effect and very clean code as well. We can user .from() method for this purpose.*/

var friends = [
    { name: 'John', age: 22 },
    { name: 'Peter', age: 23 },
    { name: 'Mark', age: 24 },
    { name: 'Maria', age: 22 },
    { name: 'Monica', age: 21 },
    { name: 'Martha', age: 19 },
]


var friendsNames = Array.from(friends, ({name}) => name);
console.log(friendsNames); // returns ['John', 'Peter', 'Mark', 'Maria', 'Monica', 'Martha']
