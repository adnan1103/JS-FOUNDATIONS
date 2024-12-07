// var variable if declare inside the block, it will also access outside the block
var c = 300;
let a = 200;

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30; // function scope or global scope
//   console.log('Inner scope', a);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// Nested Scope in js
// Inner function can access outer function variables and parameters we can say {{{clouser}}}

// // {In Neating functions child can access to parent function variables and parameters}
// function one() {
//   const username = " Adnan";

//   function two() {
//     const website = "youtube";
//     console.log(username);
//   }
//   // console.log(website);
//   two();
// }
// one();

// nesting with if condition
if (true) {
  const username = "Adnan";
  if (username === "Adnan") {
    const website = "youtube";
    console.log(username + " " + website);
  }
  // console.log(website);
}
// console.log(username);

//++++++++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));
// its function and
// just simple function declare
function addone(num) {
  return num + 1;
}


addTwo(5);
// its function but sometime we can called expression
// and we hold function in a variable
const addTwo = function (num) {
  return num + 2;
};
