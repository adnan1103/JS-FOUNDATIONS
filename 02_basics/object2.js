// There is no any difference both ways are use to declare the object
// const tinderUser = new Object(); // Singleton object
// const tinderUser1 = {}; // Non Singleton object
// console.log(tinderUser); // output {}
// console.log(tinderUser1); // output {}

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);  // output { id: '123abc', name: 'Sammy', isLoggedIn: false }

// now we see one object and inside another object

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Adnan",
      lastname: "Yousaf",
    },
  },
};

// console.log(regularUser.fullname.userfullname);   // output { firstname: 'Adnan', lastname: 'Yousaf' }

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 };    // output {  obj1: { '1': 'a', '2': 'b', '3': 'c' },   obj2: { '4': 'd', '5': 'e', '6': 'f' }}

// when two objects merge
// const obj3 = Object.assign({}, obj1, obj2);   // output { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// Spread operator { when two objects merge}
const obj3 = { ...obj1, ...obj2 }; // output { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// console.log(obj3);

const user = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
  },
  {
    id: 1,
    name: "John",
    email: "john@example.com",
  },
  {
    id: 1,
    name: "John",
    email: "john@example.com",
  },
  {
    id: 1,
    name: "John",
    email: "john@example.com",
  },
];

// console.log(tinderUser); // output { id: '123abc', name: 'Sammy', isLoggedIn: false }

// any object keys get in tinderUser object
// console.log(Object.keys(tinderUser)); // output  [ 'id', 'name', 'isLoggedIn' ]

// any object values get in tinderUser object
// console.log(Object.values(tinderUser)); // output [ '123abc', 'Sammy', false ]

// any object in array and every value in seprate array
// console.log(Object.entries(tinderUser)); // output [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// object destructuring and array destructuring

const course = {
  courseName: "Js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

// Object Destructuring
const { courseInstructor} = course; 
console.log(courseInstructor);

const {courseInstructor: instructor} = course;
console.log(instructor); 


// const navbar = ({company}) => {
// }
// navbar(company = "hitesh")


// APIs in Json format where we don't give name to objects 
// in json formate keys and values are come in inverted commas
// {
//   "id": 11,
//   "name": "John",
//   "email": "john@example.com",

// }


// Sometime we get APIs in array format and we get multiple objects in array
[
  {},
  {},
  {},
  {},
  {}
]