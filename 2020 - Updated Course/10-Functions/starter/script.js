'use strict';

/*
const bookings = [];

// Default Parameters
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;


    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123'); // {flightNum: "LH123", numPassengers: 1, price: 199}
createBooking('H123', 2, 800); //{flightNum: "LH123", numPassengers: 2, price: 800}
createBooking('GH234', 2); // {flightNum: "GH234", numPassengers: 2, price: 398}
createBooking('KH294', 5); // {flightNum: "KH294", numPassengers: 5, price: 995}

createBooking('JD358', undefined, 1000); // {flightNum: "JD358", numPassengers: 1, price: 1000}

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 97538206595
};

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport === 97538206595){
        alert('Checked in');
    } else {
        alert('Wrong passport!');
    }
};

// checkIn(flight, jonas);
// console.log(flight); // LH234
// console.log(jonas); // Mr.Jonas Schmedtmann

// Is the same as doing
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);
checkIn(flight, jonas); 

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`);
    
    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);


// JS5 uses callback all the time
const high5 = function(){
    console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

const greet = function(greeting){
    return function(name){
        console.log(`${greeting}, ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Jonas'); // Hey, Jonas
greeterHey('Steven'); // Hey, Steven

greet('Hello')('Jonas'); // Hello, Jonas

const greetArr = (greeting) => (name) => console.log(`${greeting}, ${name}`);

greetArr('Hi')('Jonas'); // Hi, Jonas
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, passengerName){
        console.log(`${passengerName} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}.`);
        this.bookings.push({flight: `${this.iataCode} ${flightNum}`, passengerName});
    }
};

lufthansa.book(239, 'Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Lufthansa flight LH 239.
lufthansa.book(635, 'John Smith') // John Smith booked a seat on Lufthansa flight LH 635.
console.log(lufthansa.bookings); // [{flight: "LH 239", passengerName: "Jonas Schmedtmann"}, {flight: "LH 635", passengerName: "John Smith"}]

const eurowings = {
    airline: 'Euro Wings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams')

// Call method
book.call(eurowings, 23, 'Sarah Williams'); // Sarah Williams booked a seat on Euro Wings flight EW 23.
console.log(eurowings.bookings); // [{flight: "EW 23", passengerName: "Sarah Williams"}]

book.call(lufthansa, 239, 'Mary Cooper'); // Mary Cooper booked a seat on Lufthansa flight LH 239.
console.log(lufthansa.bookings); // [{flight: "LH 239", passengerName: "Jonas Schmedtmann"}, {flight: "LH 635", passengerName: "John Smith"}, {flight: "LH 239", passengerName: "Mary Cooper"}]

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
};

book.call(swiss, 583, 'Mary Cooper'); // Mary Cooper booked a seat on Swiss Air Lines flight LX 583.
console.log(swiss.bookings); // [{flight: "LX 583", passengerName: "Mary Cooper"}]

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); // George Cooper booked a seat on Swiss Air Lines flight LX 583.
console.log(swiss.bookings); // [{flight: "LX 583", passengerName: "Mary Cooper"}, {flight: "LX 583", passengerName: "George Cooper"}]

book.call(swiss, ...flightData); // George Cooper booked a seat on Swiss Air Lines flight LX 583.

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams'); // Steven Williams booked a seat on Euro Wings flight EW 23.

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Euro Wings flight EW 23.
bookEW23('Martha Cooper'); // Martha Cooper booked a seat on Euro Wings flight EW 23.

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    this.planes++;
    console.log(this.planes);
    console.log(this);
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => {
    return value + (value * rate);
};

console.log(addTax(.1, 200)); // 220

const addVAT = addTax.bind(null, .23);

console.log(addVAT(100)); // 123
console.log(addVAT(23)); // 28.29

const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    };
};

const addVAT2 = addTaxRate(.23);
console.log(addVAT2(100)); // 123
console.log(addVAT2(23)); // 28.29
*/


// Coding Challenge #1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        const answer = Number(
            prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`)
            );
            console.log(answer);
            
            // Register the answer
            typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
            
        this.displayResults();
        this.displayResults('string');
    },
    
    displayResults(type = 'array'){
        if(type ==='string'){
            console.log(`The poll results are ${this.answers.join(', ')}`);
        } else if(type === 'array'){
            console.log(this.answers);
        } else {
            console.log('Type not readable');
        }
    }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3]}, 'string'); // The poll results are 5, 2, 3
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string'); // The poll results are 1, 5, 3, 9, 6, 1
*/

/*
// Immediately Invoked Function Expressions
const runOnce = function(){
    console.log('This will never run again!');
};
runOnce();

// IIFE
(function() {
    console.log('This will never run again!');
    const isPrivate = 23;
})();
(() => console.log('This will also never run again!'))();

{
    const isPrivate = 23;
    var isnotPrivate = 46;
}

// console.log(isPrivate);
console.log(isnotPrivate); // 46


// Closures
const secureBooking = function() {
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

console.dir(booker);

let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    };
};

const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2);
    };
};

g();
f(); // 46
console.dir(f);

// Re-assigning f function
h();
f(); // 1554
console.dir(f);

// Example 2
const boardPassengers = function(n, wait){
    const perGroup = n / 3;
    setTimeout(function(){
        console.log(`We are now boarding all the ${n} passengers.`);
        console.log(`There are 3 groups, each with ${perGroup} passengers.`)
    }, wait * 1000);
    
    console.log(`Will start boarding in ${wait} seconds`)
};

const perGroup = 1000;
boardPassengers(180, 3);
*/


// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀

(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click', function(){header.style.color = 'blue'});
})();
*/