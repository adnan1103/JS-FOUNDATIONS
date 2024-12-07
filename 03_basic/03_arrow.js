// const user = {
//   username: "adnan",
//   price: 999,
//   welcomeMessage: function () {
//     // this keyword refer to current context (current value and variables)
//     console.log(`${this.username} , welcome to website`);
//     console.log(this);
//   },
// };

// user.welcomeMessage();
// user.username = "saim";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = 'adnan';
//     // {{this}} would not access in the function
//     console.log(this);// undefined
// }
// chai();

// const chai = function () {
//   let username = "adnan";
//   console.log(this.username); // undefined
// };
// chai();

// // Arrow Function
// const chai = () => {
//   let username = "adnan";
//   //   console.log(this.username); // undefined
//   console.log(this);
// };
// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(3, 8));

// Implicite Return
// const addTwo = (num1, num2) => num1 + num2;

// in round braces you don't need to write the return keyword here
// const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => {username: 'Adnan'};
// console.log(addTwo(7, 7)); // undefined

// For object return we should be wrap in the prentheses
const addTwo2 = (num1, num2) => ({ username: "Adnan" });
console.log(addTwo2(7, 7)); // { username: 'Adnan' }
