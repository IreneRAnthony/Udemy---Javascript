/*
    Variables and data types
*/

console.log("Hello World!!");

var firstName = "John";
console.log(firstName); // john

var lastName = 'Smith';
var age = 28;

var  fullAge = true;
console.log(fullAge); // true

var job;
console.log(job); // undefined

job = "Teacher";
console.log(job); // Teacher

//Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';

/* 
    Variable mutation and type coercion
*/

//Type Coercion
console.log(firstName + ' ' + age); // John 28
var job, isMarried;
job = "teacher";
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// John is a 28 year old teacher. Is he married? false

//Variable Coercion
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
// John Smith

/*
    Basic Operators
*/

var year, yearJohn, yearMark, ageJohn, ageMark;
year = 2020;
yearJohn = year - 28;
yearMark = year - 33;
ageJohn = 28;
ageMark = 33;

console.log(yearJohn); // 1992
console.log(year + 2); // 2022
console.log(year * 2); // 4040
console.log(year / 10); // 202

// Logical operators
var johnOlder = ageJohn > ageMark; // false
var markOlder = ageJohn < ageMark; // true;
console.log(johnOlder);

// typeof Operator
console.log(typeof johnOlder); // boolean
console.log(typeof ageJohn); // number
console.log(typeof 'Mark is older than John.'); // string
let x;
console.log(typeof x); // undefined

/*
    Operator Precedence
*/

var now = 2020;
var johnYear = 1989;
var fullAge = 18;

// Multiple Operators
let isFullAge = (now - yearJohn) >= fullAge; 
console.log(isFullAge); // true

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
let average = (ageJohn + ageMark) / 2;
console.log(average); //32

// Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y); // 26 26

// More operators
x *= 2;
console.log(x); // 52
x += 10;
console.log(x); // 62
x++; // 63
x--; // 62

/*
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// BMI = mass / height^2

var massMark = 65; // kg
var heightMark = 1.45; // meters

var massJohn = 98;
var heightJohn = 2.10;

var johnBMI = massJohn / (heightJohn * heightJohn);
var markBMI = massMark / (heightMark * heightMark);

console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);

let markHigherBMI = massMark > massJohn;

console.log('Does Mark have a higher BMI than John? ' + markHigherBMI);

/* 
    if / else statements
*/

var firstName = "John";
let civilStatus = "single";

if(civilStatus ===  "married"){
    console.log(firstName + " is married!");
} else {
    console.log(firstName + " will hopefully marry soon!");
};

isMarried = true;

if(isMarried){
    console.log(firstName + " is married!");
} else {
    console.log(firstName + " will hopefully marry soon!");
};

if(markBMI > johnBMI){
    console.log("Mark's BMI is greater than John's");
} else {
    console.log("John's BMI is greater than Mark's");
};

/* 
    Boolean Logic
*/

firstName = "John";
age = 16;

if(age < 18){
    console.log(firstName + " is a boy.");
} else if(age < 20 && age >= 13){
    console.log(firstName + " is a teenager.")
} else if(age >= 20 && age < 30 ){
    console.log(firstName + " is a young man.")
} else {
    console.log(firstName + " is a man.");
};

/*
    The Ternary Operator and Switch Statements
*/

firstName = "John";
age = 16;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + " drinks juice.");
let drink = age >= 18 ? 'beer' : "juice";
console.log(drink);

/* if(age >= 18){
    var drink = "beer";
} else {
    var drink = "juice";
}; */

// Switch Statement
job = "teacher";
switch(job){
    case 'teacher' :
    case 'instructor':
        console.log(firstName + " teaches kids how to code.");
        break;
    case 'driver' :
        console.log(firstName + " drives an Uber in Lisbon.");
        break;
    case 'designer' :
        console.log(firstName + " designs beautiful websites.");
        break;
    default:
        console.log(firstName + " does something else.");
};

switch(true){
    case age < 13 :
        console.log(firstName + " is a boy.");
        break;
    case age >= 13 && age < 20:
        console.log(firstName + " is a teenager.");
        break;
    case age >= 20 && age < 30 :
        console.log(firstName + " is a young man.");
        break;
    default:
        console.log(firstName + " is a man.");
};

/* 
    Truthy and Falsy values
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: Not falsy values

var height;
height = 23;

if(height || height === 0){
    console.log("The variable is defined.");
} else {
    console.log("The variable is not defined.");
};

// if variable does not contain a value it is undefined.

// Equality Operators
if(height == '23'){
    console.log('The == operator does type coercion!')
};

/*
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var johnScores = [89, 120, 103];
var mikeScores = [116, 94, 123];
var maryScores = [97, 134, 105];

function averageScores(arr){
    let total = 0;
    for(var i = 0; i < arr.length; i++){
        total += arr[i];
    };
    let avg = total/arr.length;
    return avg;
};

let mikeAvg = averageScores(mikeScores);
let johnAvg = averageScores(johnScores);
let maryAvg = averageScores(maryScores);

if(mikeAvg < johnAvg && maryAvg < johnAvg){
    console.log("John's team is the winner, with an average score of " + johnAvg);
} else if(mikeAvg > johnAvg && mikeAvg > maryAvg){
    console.log("Mike's team is the winner, with an average score of " + mikeAvg);
} else if(maryAvg > johnAvg && maryAvg > mikeAvg){
    console.log("Mary's team is the winner, with an average score of " + maryAvg);
} else {
    console.log('The teams are tied.');
};

/*
    Functions
*/

function calculateAge(birthYear){
    return 2020 - birthYear;
};

let ageJohn = calculateAge(1990);
let ageMike = calculateAge(1948);
let ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageMike); // 30, 72, 51

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(firstName + " retires in " + retirement + ' years.');
    } else {
        console.log(firstName + " is already retired.");
    }
    
};

yearsUntilRetirement(1990, John); // John retires in 37 years.
yearsUntilRetirement(1948, Mike); // Mike is already retired.
yearsUntilRetirement(1969, Jane); // Jane retires in 16 years.

/*
    Function Statements and Expressions
*/

//Function Decleration
 // function whatDoYouDo(job, firstName){}

//Function Expression
var whatDoYouDo = function(job, firstName){
    switch(job) {
        case 'teacher':
            return firstName +  ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lizbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
};

console.log(whatDoYouDo('teacher', 'John')); // John teaches kids how to code.
console.log(whatDoYouDo('designer', 'Jane')); // Jane designs beautiful websites
console.log(whatDoYouDo('retired', 'Mark')); // Mark does something else

/* 
    Arrays
*/

//Initialize New Array
var namesArray = ['John', 'Mark', 'Jane'];
var yearsArray = new Array(1990, 1969, 1948);

console.log(namesArray[2]); // Jane
console.log(namesArray.length); // 3

//Mutate Array Data
namesArray[1] = 'Ben';
namesArray[namesArray.length] = 'Mary';
console.log(namesArray); // ['John', 'Ben', 'Jane', 'Mary']

// Different Data Types
var aboutJohn = ['John', 'Smith', 1990, 'teacher', false];

aboutJohn.push('blue');
aboutJohn.shift('Mr.')
console.log(aboutJohn); // ['Mr.', 'John', 'Smith', 1990, 'teacher', false, 'blue']

aboutJohn.pop();
aboutJohn.pop();
aboutJohn.shift();
console.log(aboutJohn); // ['John', 'Smith', 1990, 'teacher']

console.log(aboutJohn.indexOf(1990)); // 2
console.log(aboutJohn.indexOf(23)); // -1, since it is not in the array;

let isDesigner = aboutJohn.indexOf('designer') === -1 ? 'John is NOT a designer': 'John IS a designer.';
console.log(isDesigner);

/*
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

let bill1 = 124;
let bill2 = 48;
let bill3 = 268;

function calculateTip(bill){
    let total = 0;
    if(bill < 50){
        total = bill * 0.2;
    } else if(bill > 50 && bill < 200){
        total = bill * 0.15;
    } else if(bill > 200){
        total = bill * 0.1;
    }
    return total;
};

let billsArray = [];
let tipsArray = [];

tipsArray.push(calculateTip(bill1), calculateTip(bill2), calculateTip(bill3));
console.log(tipsArray);

billsArray.push(calculateTip(bill1) + bill1, calculateTip(bill2) + bill2, calculateTip(bill3) + bill3);
console.log(billsArray);

/*
    Objects and Properties
*/

// Object Literal
var johnObject = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(johnObject.firstName); // John
console.log(johnObject['lastName']); // Smith
let x = 'birthYear';
console.log(johnObject[x]); // 1990

johnObject.job = 'designer';
johnObject['isMarried'] = true;

console.log(johnObject);

// New Object Syntax
var janeObject = new Object();
janeObject.name = "Jane";
janeObject.birthYear = 1969;
janeObject[lastName] = "Smith";
console.log(janeObject);

/*
    Objects and Methods
*/

var johnObject2 = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age = 2020 - this.birthYear;
    }
};

johnObject2.calcAge();
console.log(johnObject2); // 28

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs.
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

var aboutJohn = {
    fullName: "John Smith",
    mass: 112,
    height: 1.85,
    BMI: 0,
    calcBMI: function(){
        this.BMI = this.mass/(this.height * this.height);
        return this.BMI;
    }
};
var aboutMark = {
    fullName: "Mark Gubonoucchi",
    mass: 80,
    height: 1.50,
    BMI: 0,
    calcBMI: function(){
        this.BMI = this.mass/(this.height * this.height);
        return this.BMI;
    }
};

aboutJohn.calcBMI();
aboutMark.calcBMI();

function compareBMI(object1, object2){
    if(object1.BMI > object2.BMI){
        console.log(object1.fullName + " has the larger BMI of " + object1.BMI);
    } else if(object1.BMI < object2.BMI){
        console.log(object2.fullName + " has the larger BMI of " + object2.BMI);
    } else if( object1.BMI === object2.BMI){
        console.log("The BMI's of both " + object1.fullName + " and " + object2.fullName + " are the same at " + object1.BMI + '.');
    }
};

compareBMI(aboutJohn, aboutMark);

/* 
    Loops and Iteration
*/

for(let i = 0; i <= 9; i++){
    console.log(i);
}

// For loop
var johnLoop = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for(let i = 0; i <= johnLoop.length; i++){
    console.log(johnLoop[i]);
}

// While loop
let i = 0;
while(i < johnLoop.length){
    console.log(johnLoop[i]);
    i++;
}

// Continue and Break Statements
for(let i = 0; i <= johnLoop.length; i++){
    if(typeof johnLoop[i] !== 'string') continue;
    console.log(john[i]);
}

for(let i = 0; i <= johnLoop.length; i++){
    if(typeof johnLoop[i] !== 'string') break;
    console.log(john[i]);
}

// Looping Backwards
for(let i = johnLoop.length; i >= 0; i--){
    console.log(john[i]);
}

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var johnsBills = {
    name: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function(){
        this.tips = [];
        this.finalAmounts = [];

        for(let i = 0; i < this.bills.length; i++){
            let percentage;
            let bill = this.bills[i];

            if(bill < 50){
                percentage = 0.2;
            } else if(bill >= 50 && bill < 200){
                percentage = 0.15;
            } else if(bill > 200){
                percentage = 0.1;
            }
            this.tips[i] = bill * percentage;
            this.finalAmounts[i] = bill + bill * percentage;
        }
    }
};

var marksBills = {
    name: 'Mark Gunochoucci',
    bills: [77, 375, 110, 45],
    calcTip: function(){
        this.tips = [];
        this.finalAmounts = [];
        for(let i = 0; i < this.bills.length; i++){
            let percentage;
            let bill = this.bills[i];

            if(bill < 100){
                percentage = 0.2;
            } else if(bill >= 100 && bill < 300){
                percentage = 0.1;
            } else if(bill > 300){
                percentage = 0.25;
            }
            this.tips[i] = bill * percentage;
            this.finalAmounts[i] = bill + bill * percentage;
        }
    }
};

function calculateAvg(tips){
    let avg = 0;
    for(let i = 0; i < tips.length; i++){
        avg += tips[i];
    }
    return avg / tips.length;
     
};

johnsBills.calcTip();
marksBills.calcTip();
console.log(johnsBills.tips);
console.log(marksBills.tips);

johnsBills.average = calculateAvg(johnsBills.tips);
marksBills.average = calculateAvg(marksBills.tips);
console.log("John's Avg: " + johnsBills.average);
console.log("Mark's Avg: " + marksBills.average);

if(johnsBills.average < marksBills.average){
    console.log("Mark's tip average is larger at " + marksBills.average + '.');
} else if(johnsBills.average > marksBills.average){
    console.log("John's tip average is larger at " + johnsBills.average + '.');
} else if(johnsBills.average === marksBills.average) {
    console.log('The averages are equal at ' + johnsBills.average +'.');
};

