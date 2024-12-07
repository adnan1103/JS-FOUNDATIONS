let score = true

// console.log(typeof score)
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber)



// Number conversion
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 'ad3';
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn)


// Boolean Conversion
// 1 => true
// 0 => false
// "" => false
// "adnan" => true

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *****************  Operations ****************// 
let value = 3;
let negValue = -value
// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3) 2 rase power of 3 
// console.log(2/3)
// console.log(2%3)  // modules or remainder

let str1 = "Hello"
let str2 = " Adnan"
let str3 = str1 + str2;

// console.log(str3);
// console.log("1"+ 2 + 2)
// console.log(1 + 2 + "2")
// console.log("1" + "2" + 2 + 2)

console.log(true)
console.log(+true)
console.log(+"")
console.log(+'') 

//is not good approach for writing code

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
debugger; 
console.log(gameCounter);


let a = 0;
const b = ++a;
console.log(`a : ${a}, b : ${b}`)
