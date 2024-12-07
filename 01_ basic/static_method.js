class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("Animal " + this.name + " is walking");
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}

j = new Animal(Animal.capitalize("jack"));
j.walk();

// this does not work because 
console.log(j.capitalize('thasdi'))