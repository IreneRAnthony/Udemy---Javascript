// Function Constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'Teacher'
};

let Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'Teacher');
var jane = new Person('Jane', 1969, 'Designer');
var mark = new Person('Mark', 1948, 'Retired');

john.calculateAge(); // 30
jane.calculateAge(); // 51
mark.calculateAge(); // 72

console.log(john.lastName); // Smith
console.log(jane.lastName);
console.log(mark.lastName);


// Object.create
var personProto = {
    calculateAge: function(){
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});


// Primatives vs. Objects

// Primatives
let a = 23;
let b = a;
a = 46;
console.log(a, b); // 46, 23

// Objects
let obj1 = {
    name: 'John',
    age: 26
};

let obj2 = obj1;
obj1.age = 30;

console.log(obj1); // Both are the same objects
console.log(obj2);

// Functions
let age = 27;
let obj = {
    name: 'Jonas',
    city: 'Lisbon',
};

function change(a, b){
    a = 30;
    b.city = 'San Francisco';
};

change(age, obj);

console.log(age); //27
console.log(obj.city); // San Francisco

// Lecture: Passing Functions as Arguments

let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    let arrRes = [];
    for(let i = 0; i < years.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return (2020 - el);
};

function isFullAge(el){
    return el >= 18;
};

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

let ages = arrayCalc(years, calculateAge);
let fullAges = arrayCalc(ages, isFullAge);
let rates = arrayCalc(ages, maxHeartRate);

console.log(ages); // [30, 55, 83, 15, 22]
console.log(fullAges); // [true, true, true, false, true]
console.log(rates); // [187, 170, -1, -1, 192]


// Lecture: Functions returning functions
function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please describe what UX design is?');
        }
    } else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name){
            console.log("Hello " + name + ', what do you do?');
        }
    }
}

let teacherQuestion = interviewQuestion('teacher');
let designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');

interviewQuestion('teacher')('Mark');


// Lecture: IIFE
function game(){
    let score = Math.random() * 10;
    console.log(score >=5);
}

game();


(function (){
    let score = Math.random() * 10;
    console.log(score >=5);
})();

// console.log(score); //undefined

(function (goodLuck){
    let score = Math.random() * 10;
    console.log(score >=5 - goodLuck);
})(5);


// Lecture: Closures

function retirement(retirementAge) {
    let a = ' years left until retirement.'
    return function (yearOfBirth) {
        let age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

let retirementUS = retirement(66);
retirementUS(1990);
let retirementGermany = retirement(65);
retirementGermany(1990);
let retirementIceland = retirement(67);
retirementIceland(1990);

//retirement(66)(1990);


function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ', can you please describe what UX design is?');
        } else if(job === 'teacher'){
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log("Hello " + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');

// Lecture: Bind, call and apply
let john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good' + timeOfDay + ', ladies and gentlemen. I\'m ' + this.name + ' I\m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey, what\'s up? I\'m ' + this.name + ' I\m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

john.presentation('formal', 'morning');

let emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation.call(emily, 'friendly', 'afternoon');
// john.presentation.call(emily, ['friendly', 'afternoon']);

let johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

let emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');



let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    let arrRes = [];
    for(let i = 0; i < years.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return (2020 - el);
};

function isFullAge(limit, el){
    return el >= limit;
};

let ages = arrayCalc(years, calculateAge);
let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/


/////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1.  Build a function constructor called Question to describe a question. A question should include:
a)  question itself
b)  the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c)  correct answer (I would use a number for this)

2.  Create a couple of questions using the constructor

3.  Store them all inside an array

4.  Select one random question and log it on the console, together with the possible answers 
    (each question should have a number) (Hint: write a method for the Question objects for this task).

5.  Use the 'prompt' function to ask the user for the correct answer.
    The user should input the number of the correct answer such as you displayed it on Task 4.

6.  Check if the answer is correct and print to the console whether the answer is correct ot nor 
    (Hint: write another method for this).

7.  Suppose this code would be a plugin for other programmers to use in their code. 
    So make sure that all your code is private and doesn't interfere with the other programmers code 
    (Hint: we learned a special technique to do exactly that).
*/

/*
(function () {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (let i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans) {
        if (ans === this.correctAnswer) {
            console.log('Correct!');
        } else {
            console.log('Sorry, incorrect answer, try again.');
        }
    }

    let firstQuestion = new Question('How cool is Javascript?', ['Very', 'It\'s not cool'], 0);
    let secondQuestion = new Question('Should you feel good about getting this far?', ['No', 'Yes', 'Maybe'], 1);
    let thirdQuestion = new Question('Do you think you can finish this course?', ['No', 'Not sure', 'Of course!'], 2);

    let questions = [firstQuestion, secondQuestion, thirdQuestion];

    let n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    let answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);

})();
*/

/*
--- Expert level ---

8.  After you display the result, display the next random question, so that the game never ends 
    (Hint: write a function for this and call it right after displaying the result)

9.  Be careful: after Task 8, the game literally never ends. 
    So include the option to quit the game if the user writes 'exit' instead of the answer. 
    In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun!
    So each time an answer is correct, add 1 point to the score 
    (Hint: I'm going to use the power of closures for this, but you don't have to, 
    just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function () {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (let i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans, callback) {
        let sc;
        if (ans === this.correctAnswer) {
            console.log('Correct!');
            sc = callback(true);
        } else {
            console.log('Sorry, incorrect answer, try again.');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function (score) {
        console.log('Current score is: ' + score);
        console.log(' ---------- ');
    }

    let firstQuestion = new Question('How cool is Javascript?', ['Very', 'It\'s not cool'], 0);
    let secondQuestion = new Question('Should you feel good about getting this far?', ['No', 'Yes', 'Maybe'], 1);
    let thirdQuestion = new Question('Do you think you can finish this course?', ['No', 'Not sure', 'Of course!'], 2);

    let questions = [firstQuestion, secondQuestion, thirdQuestion];

    function score() {
        let sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    let keepScore = score();

    function nextQuestion() {
        let n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        let answer = prompt('Please select the correct answer.');

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    };

    nextQuestion();

})();