'use strict';

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
1) Understanding the problem
    - Taking an array and turning it into a string
    - For each array value you need to add it to the string, and seperate each value in the string with elipses
    - Depending on the placement of the value in the array, the number of days will differ

2) Breaking up into sub-problems
    - Create a function that intakes an array
    - Have the function parse through the array
    - For each value it must be transformed and appended to the new string
    - Each value in the new string must be seperated by elipses
    - Depending on the index of the array value it must be added to the string
    - When finished the string must printed to the console

*/


const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr){
    let string = '';
    for(let i = 0; i < arr.length; i++){
        string += `... ${arr[i]} ºC in ${i + 1} days `;
    }
    console.log(string);
};

printForecast(data1);
printForecast(data2);