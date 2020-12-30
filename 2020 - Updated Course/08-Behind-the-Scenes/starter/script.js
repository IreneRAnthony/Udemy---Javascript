'use strict';

// Scoping in Practice
/*
function calcAge(birthYear){
    const age = 2037 - birthYear;
    function printAge(){
        const output = `${firstName} are ${age}, born in ${birthYear}`;
        console.log(output);
        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            // Creating new variable with same name as outer scope's variable
            const firstName = 'Steven';
            const str = `Oh, and you're a millenial, ${firstName}.`;
            console.log(str);

            // Reassigning outer scope's variable
            output = 'New Output!';

            function add(a, b){
                return a + b;
            }
        };
        console.log(millenial);
    }
    printAge();
    return age;
};

const firstName = "Jonas";
calcAge(1991);

// Variables
console.log(me); // undefined
// console.log(job); // reference error
// console.log(birthYear); // reference error

var me = 'Jonas';
let job = 'teacher';
const birthYear = 1991;

// Functions
console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // reference error
// console.log(addArrow(2, 3)); // reference error

function addDecl(a, b){
    return a + b;
};

const addExpr = function (a, b){
    return a + b;
};

const addArrow = (a, b) => a + b;

 // Changing either const to var creates a typeError

// Example
if(!numProducts){
    deleteShoppingCart();
};
// if statement works since hoisting causes numProducts to be undefined when checked

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
};

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this); // the window object

const calcAge = function(birthYear){
    console.log(2037 - birthYear);
    console.log(this); 
};

calcAge(1991); // 46, and undefined

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); 
};

calcAgeArrow(1980); // 57, and the window object

const jonas = {
    birthYear: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.birthYear);
    }
};
jonas.calcAge(); // jonas object, 46

const matilda = {
    birthYear: 2017
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // 20

const f = jonas.calcAge;
f(); // Cannot read birthYear of undefined

var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    birthYear: 1991,
    calcAge: function(){
        // console.log(this);
        // console.log(2037 - this.birthYear);

        // Solution 1
        // const self = this; // self or that
        // const isMillenial = function(){
        //     console.log(self);
        //     console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
        // }

        // Solution 2
        const isMillenial = () => {
            console.log(self);
            console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
        };
        isMillenial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hey, ${this.firstName}!`);
    }
};
jonas.greet(); 
console.log(this.firstName); 

jonas.calcAge(); // typeError

// Arguments Keyword
const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5); // an object containing both 2 and 5
addExpr(2, 5, 8, 12); // an object containing both 2, 5, 8, and 12

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};

addArrow(2, 3); // argument not defined


let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

const me = {
    name: 'Jonas',
    age: 30
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend); // {name: "Jonas", age: 27}
console.log('Me:', me); // {name: "Jonas", age: 27}

*/

// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName); // Davis
console.log(oldLastName); // Williams

// Reference Types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before Marriage: ', jessica); // {firstName: 'Jessica', lastName: 'Davis', age: 27}
console.log('After Marriage: ', marriedJessica); // {firstName: 'Jessica', lastName: 'Davis', age: 27}

// Copying Objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary'); 
jessicaCopy.family.push('John');

console.log('Before Marriage: ', jessica2); // {firstName: 'Jessica', lastName: 'Williams', age: 27, family: ['Alice', 'Bob', 'Mary', 'John']}
console.log('After Marriage: ', jessicaCopy); // {firstName: 'Jessica', lastName: 'Davis', age: 27, family: ['Alice', 'Bob', 'Mary', 'John']}