class Animal {
  constructor(name) {
    this.name = name; // instance property
  }

  // instance method
  walk() {
    console.log(this.name + " is walking");
  }

  // another instance method
  speak(){
    console.log(this.name + " says hello");
  }
}

// create an instance of Animal
const dog = new Animal("Buddy");

// call the instance method
dog.walk(); // get the output: Buddy is walking
dog.speak(); // get the output: Buddy says hello!


//*********************************************************************/
