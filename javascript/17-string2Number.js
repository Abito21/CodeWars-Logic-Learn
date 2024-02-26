/*
Problem :
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Example :
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/

// First Logic : using Number() function
const stringToNumber = function(str){
    // put your code here
    // return typeof(str) // to check data type
    return Number(str);
}

console.log(stringToNumber("17"))