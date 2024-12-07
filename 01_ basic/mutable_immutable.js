// Mutable object
let person = {
    name: 'John',
    age: 34,
}

// Modify the object
person.name = 'Jane'
person.age = 32
person.city = 'Lahore' // adding the city to the person

console.log(person)

//##################################################################

// Immutable object

let person3 = Object.freeze({
    name: 'Mohsin',
    age: 54,
})

// Modify the immutable object
person3.name = 'Asif',
person3.age = 66

console.log(person3)


// Immutable primitive values
let name1 = 'Zubair'

// Attempting to change the string (which is immutable)
name1[0] = 'B'

console.log(name1);

name1 = 'Sohail'

console.log(name1)


// Pass by value {Primitive type}
let x = 10;
let y = x; // copy of x
y = 20; //changing y does not effect x

console.log(x); //output 10
console.log(y); //output 20

