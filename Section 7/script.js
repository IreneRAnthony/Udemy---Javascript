/*
// Lecture: let and const

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5); // Jane Miller

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6); // TypeError, assignment to constant variable


// ES5
function driversLicense5(passedTest){
    if(passedTest){
        console.log(firstName); // undefined
        var firstName = 'John';
        var yearOfBirth = 1990; 
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
};

driversLicense5(true); // John, born in 1990, is now officially allowed to drive a car.

// ES6
function driversLicense6(passedTest){
    // console.log(firstName); // firstName is not defined error
    let firstName;
    const yearOfBirth = 1990;

    if(passedTest){
        firstName = 'John';
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
};

driversLicense6(true); 


let i = 23;
for(let i = 0; i < 5; i++){
    console.log(i); // 1, 2, 3, 4
}
console.log(i); // 23

let i = 23;
for(var i = 0; i < 5; i++){
    console.log(i); // 1, 2, 3, 4
}
console.log(i); // 5



// Lecture: Blocks and IIFEs

{
    const a = 1;
    let b = 2;
    var c = 3;
}

// console.log(a + b); // Reference error, a and b are not defined
console.log(c); // 3

// ES5
(function(){
    var c = 3;
})();

//console.log(c); // Reference error, c is not defined


// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calculateAge(year){
    return (2020 - year);
};

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calculateAge(yearOfBirth) + ' years old.')

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calculateAge(yearOfBirth)} years old.`); 

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); // true
console.log(n.startsWith('j')); // false
console.log(n.endsWith('th')); // true
console.log(n.endsWith('Sm')); // false

console.log(n.includes(' ')); // true
console.log(n.includes('oh')); // true

console.log(`${firstName} `.repeat(5)); // John John John John John


// Lecture: Arrow Functions

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function (el) {
    return 2020 - el;
});
console.log(ages5); // [30, 55, 38, 83]

// ES6
let ages6 = years.map(el => 2020 - el);
console.log(ages6); // [30, 55, 38, 83]

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
console.log(ages6); // ["Age element 1: 30.", "Age element 2: 55.", "Age element 3: 38.", "Age element 4: 83."]

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6); // ["Age element 1: 30.", "Age element 2: 55.", "Age element 3: 38.", "Age element 4: 83."]


// Lecture: Arrow Functions 2

// ES5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This box number ' + self.position + ' and it is ' + self.color + '.';
            alert(str);
        });
    }
}

// box5.clickMe();


// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box number ' + this.position + ' and it is ' + this.color + '.';
            alert(str);
        });
    }
}

// box6.clickMe();


const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box number ' + this.position + ' and it is ' + this.color + '.';
            alert(str);
        });
    }
}

box66.clickMe();


function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function (friends) {
    var arr = friends.map(function (el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6

Person.prototype.myFriends6 = function (friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
};

new Person('Mike').myFriends6(friends);



// Lecture: Destructuring

// ES5
var john = ['John', 26];
// var name = john[0];
// var age = john[1];


// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);


const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);




function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
};


const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);


// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxes.forEach(function (cur) {
    cur.style.backgroundColor = "dodgerBlue";
});




// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach((cur) => cur.style.backgroundColor = 'dodgerBlue');

/*
// ES5
for(let i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue'){
        continue;
    } else {
        boxesArr5[i].textContent = "I have changed to blue!";
    }
}

// ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    } else {
        cur.textContent = "I have changed to blue!";
    }
};



// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur){
    return cur >= 18;
});

console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);



// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));



// Lecture: Spread Operator

function addFourAges(a, b, c, d){
    return a + b + c + d;
};

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);


// ES6
const max3 = addFourAges(...ages);
console.log(max3);


const smithFamily = ['John', 'Jane', 'Mark'];
const millerFamily = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...smithFamily, 'Lily', ...millerFamily];
console.log(bigFamily);

const h  = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');


// Lecture: Rest Parameters

// ES5
function isFullAge5(){
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur){
        console.log((2016 - cur) >= 18);
    });
};

//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);


// ES6
function isFullAge6(...years){
    years.forEach(cur => console.log((2016 - cur) >= 18));
};

isFullAge6(1990, 1999, 1965, 2016, 1987);



// ES5
function isFullAge5(limit){
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(cur){
        console.log((2016 - cur) >= limit);
    });
};

// isFullAge5(16, 1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);


// ES6
function isFullAge6(limit, ...years){
    years.forEach(cur => console.log((2016 - cur) >= limit));
};

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);



// Lecture: Default Parameters

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality){

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = "american" : nationality = nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
};

// ES6
function SmithPerson(firstName, yearOfBirth, lastName = "Smith", nationality = "american"){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');




// Lecture: Maps

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong, please try again!');

//console.log(question.get('question')); // What is the official name of the latest major JavaScript version?
//console.log(question.size); // 8

if(question.has(4)){
    // question.delete(4);
    // console.log('Answer 4 is here.');
}

// question.clear();


// question.forEach((value, key) => console.log(`This is ${key}, and it is set to ${value}.`));

for(let [key, value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`)
    }
};

const ans = parseInt(prompt('Write the correct answer.'));
console.log(question.get(ans === question.get('correct')));



// Lecture: Classes

// ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
};

var john5 = new Person5('John', 1990, 'teacher');


// ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log('Hey there!');
    }

};

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();



// Lecture: Classes and SubClasses

// ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);
};

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


// ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
};

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
};

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();

*/


// CODING CHALLENGE
/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. 
All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (formula: number of trees/park area)
2. Average age of each town's park (formula: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, 
default parameters, maps, arrow functions, destructuring, etc.

*/

// Create a basic element class to connect/extend the park and street classes
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
};

class Park extends Element {
    constructor(name, buildYear, numTrees, parkArea) {
        // Use the name and build year from the element class
        super(name, buildYear);
        this.numTrees = numTrees;
        this.parkArea = parkArea;
    }

    // Create a prototype function that will calculate the tree density of the current park
    treeDensity() {
        var density = this.numTrees / this.parkArea;
        console.log(`This park area has tree density of ${density} per square km.`);
    }

};

class Street extends Element {
    // The default size of the street should be normal if one is not given
    constructor(name, buildYear, size = 3, length) {
        super(name, buildYear);
        this.size = size;
        this.length = length;
    }

    // Add a prototype function that sets a map to index the different street sizes, as well as console logs the current street size
    streetClassify() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name} is classified as ${classification.get(this.size)} street, and was built in ${this.buildYear}.`)
    }
};


const allParks = [new Park('Redwood Park', 1983, 453, 0.5),
    new Park('Tilden Park', 1956, 1245, 0.8),
    new Park('Chabot Park', 1978, 238, 0.3)
];
const allStreets = [new Street('Mulberry Lane', 1976, 4, 2.2),
    new Street('Girvin Drive', 1965, 1.5),
    new Street('Sunnyvale Road', 2002, 2, 5),
    new Street('Aitken Road', 1990, 1, 4)
];

// Use one function to calculate average and sum of an array to not repeat code
function calcSumAndAvg(arr) {
    // Take the array given, start with a total of 0, and add the previous and current index values together
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    // Return both the sum, and the average
    return [sum, sum / arr.length];
};


function reportParks(parks) {
    console.log('----- Park Report -----');

    // Density
    // For each instance in the allParks array, calculate tree density 
    parks.forEach(element => {
        element.treeDensity();
    });

    // Average Age
    // Use the prototype.map function to calculate the ages of each park 
    const ages = parks.map(el => new Date().getFullYear() - el.buildYear);
    // use the calcSumAndAvg function to create and array with both totalAge and averageAge
    const [totalAge, avgAge] = calcSumAndAvg(ages);
    console.log(`Our ${parks.length} parks have an average of ${avgAge} years.`);

    // Which park has more than 100 trees
    // Use the prototype.map function to find the index of parks that have 1000 trees or more
    const i = parks.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${parks[i].name} has 1000 trees or more.`);
};

function reportStreets(streets) {
    console.log('----- Streets Report -----');

    // Total and average length of the town's streets
    // Make an array of the calculated total length and average length
    // Input an array of all lengths of each street
    const [totalLength, avgLength] = calcSumAndAvg(streets.map(el => el.length));
    console.log(`The ${streets.length} have a total length of ${totalLength}, and a average length of ${avgLength} km.`);

    // Classify Sizes
    // Classify each street
    streets.forEach(el => el.streetClassify());
};

reportParks(allParks);
reportStreets(allStreets);