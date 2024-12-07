// const name = "Adnan ";
// const value2 = 34;

// //  console.log(name +  + value2 + " value");

// // console.log(`my name is ${name} and value is ${value2}`)

// const name2 = new String("Adnan-yousaf");
// const name3 = name2.toUpperCase();
// const name5 = name2.length;

// console.log(
//   `name2 string is ${name2} and name3 is ${name3}  and name2 is ${name2}`
// );
// // console.log(name2[0])
// // console.log(name2.toUpperCase());
// // console.log(name2.length)

// // console.log(name2.__proto__);

// // console.log(name2.charAt(2));
// // console.log(name2.indexOf('a'));

// const newString = name2.substring((0, 3)); // last value is not included in the string
// // in substring we cannot give negative value as well
// console.log(newString);

// console.log(name5);
// const anotherString = name2.slice(-12, 4); // they can move from reverse order and forward
// console.log(anotherString);

// const newStringone = "   Adnan   ";
// console.log(newStringone);
// console.log(newStringone.trim()); // trim remove the starting and end space

// const url = "http://adnan.com/awais%30yousaf";
// // console.log(url.replace('%30', '-'))
// console.log(url.includes("AbdulJabbar"));

// // console.log(name2.split('-'))

// //////////////////////////////////Code with Harry

// let name4 = "Harry";
// console.log(name4.length);

// console.log(name.toUpperCase());

// console.log(name.toLowerCase());
// console.log(name.slice(1, 4));
// console.log(name.slice(2));

// console.log(name.replace("Adnan", "Awais"));
// // console.log(name)

// console.log(name.replace("ad", "Lo")); // if exact string will be there then will ne replace otherwise it will remain same

// let name7 = 'John';

// // when you concat multiple strings
// console.log(name.concat(' is a friend of ', name7, ' and are you ok my dear ', name7));

// let name8 = 'Adnan';
// console.log(name8[0])
// console.log(name8[1])

// let name2 = 'John';
// for(let i=0; i<name2.length; i++){
//     console.table(name2[i]);
// }

// String Methods explore form MDN

// string raw
// const filePath = String.raw`C:\development\profile\models\vale.html`;

// console.log(`This file uploded form: ${filePath}`);

// const string1 = 'Peoples are playing in the gardens'
// const value3 = String.raw`${string1}`;
// console.log(value3);

// string at
// const sentence = 'This is the string of students that are playing in the field';
// let index = 8;

// console.log(`An index of ${index} and return the character ${sentence.at(index)}`);

// index = -4

// console.log(`An index of ${index} and return the character ${sentence.at(index)}`)

const myString = "People were playing in the garden";

// using length property and character method
console.log(myString.length);
const myLength = myString.charAt(myString.length - 6);
console.log(myLength);

// // slice method
// const sliceWay = myString.slice(2, 11);
// console.log(sliceWay);

// // using at method
// const atWay = myString.at(-5);
// console.log(atWay);

// split method
const csv = "apple, orange, banana";
// const fruits = csv.split();
// console.log(fruits);

// replace method which are most commonly used
const newStr = csv.replace("apple", 'Grapes');
console.log(newStr)

// console.log(csv.startsWith("app"))

console.log(csv.includes('ele'))

console.log(csv.indexOf('lll'))

