//  Primptive data types

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("1243");
const anotherId = Symbol("1243");

// console.log(id == anotherId)

const bigNumber = 9875878978327459027865947897n;

// non Primitive data types ( call by reference )

const hero = ["adnan", "usman", "shoaib"];
let myObject = {
  name: "Adnan Yousaf",
  age: 28,
};

// const myFunction = function(){
// console.log("Hello world")
// }

// console.log(typeof myFunction);

// Primoitive data type call by value

let myName = "adnanYousaf";
let anotherName = myName;

anotherName = "Usaman";
console.log(anotherName);
console.log(myName);

// non primitive data type call by reference

let userOne = {
    email: "user@example.com",
    course: "Programming"
}
let userTwo = userOne;
// console.log(userTwo);
// console.log(userOne);

userTwo["course"] = "Algebra";

console.log(userTwo);
console.log(userOne);


/*********************************************************************************************************** */

// Code with Harry
let date = new Date();
// console.log(typeof date);
// console.log(date);

// primitive data type
// let d = BigInt('3455') + BigInt('234565');
// console.log(d);
// console.log(typeof d);

// practice with code with harry
let varString = "hello world ";
let value1 = 23;
// console.log(varString + value1);
// console.log(typeof (varString + value1));

const obj1 = {
  name: "adnan",
  section: 2,
  course: "Programming and Development",
};
// obj1 = 34;
// obj1['friends'] = 'Usman';
// console.log(obj1);

const dict = {
  battologize: "to repeat (a word, phrase, mannerism, etc.) excessively",
  poseur: "to repeat (a word, phrase, mannerism, etc",
  fulvous: "tawny; dull yellowish-gray or yellowish-brown",
};

// console.log(dict.poseur)
// console.log(dict["battologize"])
