// Arrays in javascript

// const myArry = [] // brackets
// const myArry2 = {} // braces or curly braces
// const myArry3 = () // parenthesis

const myArry = [1, 2, 3, 4, 5]; // square bracket
// const myHero = ["Shaktiman", "naagraj"];

// const myArray2 = new Array(1, 2, 3, 4);
// console.log(myArry[0]); // output 1

// Array methods
// myArry.push(6);
// myArry.push(7); // add element in the array
// myArry.pop(); // remove the last element from the array
// console.log(myArry); // output [1, 2, 3, 4, 5, 6, 7]
// // console.log(myArry[4]);

// myArry.unshift(88); // add element at the start of the array (push)
// console.log(myArry);

// myArry.shift(); // remove element from the start of the array (pop)
// console.log(myArry);

// console.log(myArry.includes(9)); // ask quesion {means true or false} that this element exist in the array or not like '9' and dataType is boolean


// console.log(myArry.indexOf(3)); // if value not given then it will return -1 and if value is given then it will return the index of that value


// const newArray = myArry.join();

// console.log(myArry);
// console.log(newArray); // output 12345
// console.log(typeof newArray); // output string {join method bind the array and convert into string}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// slice and splice method

console.log('A', myArry); //output A [ 1, 2, 3, 4, 5 ]
const myn1 = myArry.slice(1,3);
 // slice do not change the original array
console.log(myn1); // output [2, 3]
console.log('B', myArry); //output B [ 1, 2, 3, 4, 5 ]

////////////////////////////////////////////////

const myn2 = myArry.splice(1,3);
console.log(myn2); //output [2, 3, 4]
// splice manipulate the original array and when we pick values then take all values
console.log('C', myArry); // output C [ 1, 5 ]



