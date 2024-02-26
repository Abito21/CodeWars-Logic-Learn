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
// const stringToNumber = function(str){
//     // put your code here
//     // return typeof(str) // to check data type
//     return Number(str);
// }

// Second Logic : using parsInt() function
// const stringToNumber = function(str){
//     // put your code here
//     // return typeof(str) // to check data type
//     return parseInt(str);
// }

// Third Logic : using parsFloat() function
// const stringToNumber = function(str){
//     // put your code here
//     // return typeof(str) // to check data type
//     return parseFloat(str);
// }

// Fourth Logic : using case plus with character itself
// If we have character string and plus with same character string, the system define the new data type of character is number (it can be int or float).
// Notes : the string is a standalalone character (number). 
// const stringToNumber = function(str){
//     // put your code here
//     // return typeof(str) // to check data type
//     return + str;
// }

// Fifth Logic : using case plus with character itself
// If we have character string and time with 1 (int), the system define the new data type of character is number (it can be int or float).
// Notes : the string is a standalalone character (number). 
const stringToNumber = function(str){
    // put your code here
    // return typeof(str) // to check data type
    return str * 1;
}

console.log(stringToNumber("17.55"))