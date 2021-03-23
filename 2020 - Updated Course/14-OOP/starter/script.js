'use strict';

/*
// Constructor functions and the new operator
const Person = function(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
  
  // Never create a method in a constructor function
  //   this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    //   };
  };
  
  const jonas = new Person('Jonas', 1991);
  console.log(jonas); // Person {firstName: "Jonas", birthYear: 1991}
  
  // 1. New {} is created
  // 2. function is called, this = {}
  // 3. {} linked to prototype
  // 4. function automatically returns {}
  
  const matilda = new Person('Matilda', 2017);
  const jack = new Person('Jack', 1975);
  console.log(matilda); // Person {firstName: "Matilda", birthYear: 2017}
  console.log(jack); // Person {firstName: "Jack", birthYear: 1975}
  
  const jay = 'Jay';
  
  console.log(jonas instanceof Person); // true
  console.log(jay instanceof Person); // false
  
  Person.hey = function(){
    console.log('Hey there!');
  };

  Person.hey();


  // Prototypes
  console.log(Person.prototype); // {constructor: ƒ}
  
  Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
};

jonas.calcAge(); // 46
matilda.calcAge(); // 20

console.log(jonas.__proto__); // {calcAge: ƒ, constructor: ƒ}
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species); // Homo Sapiens Homo Sapiens

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

// Prototypal inheritance on built in objects
console.log(jonas.__proto__); // {species: "Homo Sapiens", calcAge: ƒ, constructor: ƒ}
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(jonas.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor); // ƒ Person(firstName, birthYear)

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__); 
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__); 

Array.prototype.unique = function() {
  return [...new Set(this)];
};

console.log(arr.unique()); // [3, 6, 5, 9]

const h1 = document.querySelector('h1');
console.dir(x => x + 1); // anonymous()
*/


// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function(){
  this.speed += 10;
  console.log(`${this.make}'s new speed is ${this.speed} km/h.`);
};

Car.prototype.brake = function() {
  this.speed -= 5;
  console.log(`${this.make}'s new speed is ${this.speed} km/h.`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 90);

bmw.brake(); // BMW's new speed is 115 km/h
bmw.accelerate(); // BMW's new speed is 125 km/h.

mercedes.accelerate(); // Mercedes's new speed is 100 km/h.
mercedes.brake(); // Mercedes's new speed is 95 km/h.
*/

// ES6 Classes

// class expression
// const PersonCl = class {};

/*
// Class declerations
class PersonCl {
  constructor(fullName, birthYear){
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  };

  greet() {
    console.log(`Hey, ${this.firstName}!`);
  };

  get age() {
    return 2037 - this.birthYear;
  };

  // Set a property that already exists
  set fullName(name) {
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a real name!`);
  }

  // Get a property that already exists
  get fullName() {
    return this._fullName;
  }

  // Static Methods
  static hey(){
    console.log(`Hey there!`);
    console.log(this);
  }

};

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica); // PersonCl {firstName: "Jessica", birthYear: 1996}
jessica.calcAge(); // 41
console.log(jessica.age); // 41

console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function() {
//   console.log(`Hey, ${this.firstName}!`);
// };

jessica.greet(); // Hey, Jessica!

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

// 1. Classes are not hoisted
// 2. Classes are first-class citizens 
// 3. Classes are executed in strict mode


// Setters and getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  }
};

console.log(account.latest); // 300 

account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); // 58

*/

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make}'s new speed is ${this.speed} km/h.`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make}'s new speed is ${this.speed} km/h.`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(newSpeed) {
    this.speed = newSpeed * 1.6;
  }
};

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS); // 75
ford.accelerate(); // Ford's new speed is 130 km/h.
ford.brake(); // Ford's new speed is 125 km/h.
ford.speedUS = 50;
console.log(ford); // CarCl {make: "Ford", speed: 80}
*/

// Inheritance between "classes": constructor functions

/*
const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
  console.log(2037 - this.birthYear);
};

const Student = function(firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName}, and I study ${this.course}.`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce(); // My name is Mike, and I study Computer Science.
mike.calcAge(); // 17

console.log(mike.__proto__); // Person {introduce: ƒ}
console.log(mike.__proto__.__proto__); // {calcAge: ƒ, constructor: ƒ}

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);
*/

// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make}'s new speed is ${this.speed} km/h.`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make}'s new speed is ${this.speed} km/h.`);
};

const EV = function(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
  this.charge = chargeTo;
};
  
EV.prototype.accelerate = function(){
  this.speed += 20;
  this.charge -= 1;
  console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}.`);
};

const tesla = new EV('Tesla', 120, 35);
console.log(tesla); // {make: "Tesla", speed: 120, charge: 35}

tesla.chargeBattery(95);
console.log(tesla); // EV {make: "Tesla", speed: 120, charge: 95}
tesla.accelerate(); // Tesla going at 140 km/h, with a charge of 94.
tesla.brake(); // Tesla's new speed is 135 km/h.
*/

/*
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
};

class Student extends PersonCl {
  constructor(fullName, birthYear, course){
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName}, and I study ${this.course}.`);
  };

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${(2037 - this.birthYear) + 10}.`);
  }
};

const martha = new Student('Martha Jones', 2012, 'Computer Science');
martha.introduce(); // My name is Martha Jones, and I study Computer Science.
martha.calcAge() // I'm 25 years old, but as a student I feel more like 35.
*/

/*
// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function() {
  console.log(`My name is ${this.firstName}, and I study ${this.course}.`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce(); // My name is Jay, and I study Computer Science.
jay.calcAge(); // 27
*/

/*
class Account {
  // Public Fields (instances)
  locale = navigator.language;
  // _movements = [];

  // Private Fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin){
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected Property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}!`)
  };

  // Public Methods

  // Public Interface
  getMovements() {
    return this.#movements;
  };

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdrawl(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if(this._approveLoan(val)){
      this.deposit(val);
      console.log('Loan approved.');
    }
    return this;
  }

  static helper() {
    console.log('Helper');
  }

  // Private Methods
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'Euro', 1111, []);

acc1.deposit(250);
acc1.withdrawl(140);
acc1.requestLoan(1000); // Loan approved.
Account.helper();

// console.log(acc1.getMovements()); // [250, -140, 1000]
// console.log(acc1);
// console.log(acc1._pin); // 1111

// Chaining
acc1.deposit(300).deposit(500).withdrawl(35).requestLoan(2500).withdrawl(4000);
console.log(acc1.getMovements()); // [250, -140, 1000, 300, 500, -35, 2500, -4000]
/*

// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make}'s new speed is ${this.speed} km/h.`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make}'s new speed is ${this.speed} km/h.`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(newSpeed) {
    this.speed = newSpeed * 1.6;
  }
};

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge){
    super(make, speed);
    this.#charge = charge;
  };

  chargeBattery = function(chargeTo) {
    this.#charge = chargeTo;
  };

  accelerate = function(){
    this.speed += 20;
    this.#charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}.`);
    return this;
  };

};

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian); 

rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50);

console.log(rivian);
console.log(rivian.speed); // 175

