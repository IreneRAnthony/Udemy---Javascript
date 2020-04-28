///////////////////////////////////////
// Lecture: Hoisting

// functions
calculateAge(1965); // 51 

function calculateAge(year){
    console.log(2016 - year);
};


// retirement(1965);  Uncaught TypeError

var retirement = function(year){
    console.log(65 - (2016 - year));
}


// variables
console.log(age); // undefined
let age = 23;
console.log(age); // 23

function foo(){
    console.log(age);
    let h = 65;
    console.log(h);
};
foo(); // undefined, 65
console.log(age); // 23



///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

function third(){
    let d = 'John';
    // console.log(c);
    console.log(a + d);
};
third(); // Hello John




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}




///////////////////////////////////////
// Lecture: The this keyword

function calculateAgeTheSequel(year){
    console.log(2016 - year);
    console.log(this);
}

calculateAgeTheSequel(1985); // 31, info about window object

var john = {
    name: "John",
    yearOfBirth: 1990,
    calculatePersonsAge: function(){
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
}

john.calculatePersonsAge(); // Object {}, 26, info about window object

var mike = {
    name: "Mike",
    yearOfBirth: 1984
};

mike.calculatePersonsAge = john.calculatePersonsAge();
mike.calculatePersonsAge(); // Object{}, 32


