// Function Definition
function sayMyName() {
  console.log("A");
  console.log("D");
  console.log("N");
  console.log("A");
  console.log("N");
}

// this is the function reference and when we add round breses then it will be function execute
// sayMyName;

// when  we add prenthesis then it's the function execution
// sayMyName();

// when we make function definition then
// we take any type of input in the prenthesis then
// we {{ called parameter}}
// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// we {{ called parameter}}
// when we use {{{return}}} inside the function
// then we can store function value and logic inside the variable
function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
  console.log("Adnan Yousaf");
}

// when we call the function then
//  we pass the value in the prenthesis and
// we {{called argument}}
// addTwoNumbers(3, 4); // output 7
// addTwoNumbers(3, "4"); // output 34
// addTwoNumbers(3, "a"); // output 3a
// addTwoNumbers(3, null); // output 3

const result = addTwoNumbers(3, 14);
// console.log("Result: ", result); // output undefined {without return statement} or 17 {with return statement}

function loginUserMessage(username = "Sam") {
  // if(username === undefined){
  if (!username) {
    console.log("Please enter the username:");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Adnan")); // output Adnan just logged in
// console.log(loginUserMessage("Zaid"));

// function calculateCartPrice(...num1){ // rest operator that get multiple values
//     return num1;
// }
// console.log(calculateCartPrice(200, 300, 500, 800, 1000)); // output [ 200, 300, 500, 800, 1000 ]

function calculateCartPrice(val1, val2, ...num1) {
  // {{rest operator}} that get multiple values
  // val1 200, val2 300, num1 [500, 800, 1000]
  return num1;
}
// console.log(calculateCartPrice(200, 300, 500, 800, 1000)); // output [500, 800, 1000]


// Object pass to function method
const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
// anyone way we can use to call to function
// handleObject(user);
handleObject({ username: "hitesh", price: 199 });


// array pass to function method
const myNewArray = [200, 400, 600, 1000];

function returnSecondValue(getArray){
return getArray[1]
}
// console.log(returnSecondValue(myNewArray)); // output 400
console.log(returnSecondValue([200, 300, 600, 1000]));  // output 300
