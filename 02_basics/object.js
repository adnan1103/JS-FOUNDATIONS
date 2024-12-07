// singlton (when we create constructor object then it become singleton)
// object.create  // that it's constructor declaration and we can say singleton constructor

// object literals
// in object we use key value pair

const mySym = Symbol("key1"); // symbol use as a key or take symbol add in object as a keys and print them

const JsUser = {
  // key work behind the seen just like a string
  name: "Asad",
  "full name": "Asad Ahmad",
  [mySym]: "mykey1", // for symbol declaration
  age: 25,
  location: "Laore",
  email: "asad@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};

// object values override
JsUser.email = "asad88@hotmail.com";

// we can lock the object valuse that no one can change them
//  Object.freeze(JsUser)
//  JsUser.email= 'asad22@chatgpt.com'

//  console.log(JsUser.email);// output asad@gmail.com
//  console.log(JsUser["email"]); // square notation [output asad@gmail.com]
//  console.log(JsUser['full name']); // square notation [output asad@gmail.com ]
//  console.log(JsUser[mySym]); // for symbol declaration just we use [square notation]
// console.log(JsUser);

// in Js we can use fuction and store function in variables
JsUser.greeting = function () {
  console.log("Hello js user");
};
JsUser.greetingTwo = function () {
  // when we convert into back_ticks and we called string interpolation
  console.log(`Hello js user, ${this.name}`); // refer the name
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
