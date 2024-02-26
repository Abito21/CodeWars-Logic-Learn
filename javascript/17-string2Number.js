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

// Fifth Logic : using case time character with 1 (int)
// If we have character string and time with 1 (int), the system define the new data type of character is number (it can be int or float).
// Notes : the string is a standalalone character (number). 
// const stringToNumber = function(str){
//     // put your code here
//     // return typeof(str) // to check data type
//     return str * 1;
// }

// Sixth Logic : using alternative code
// the alternative method without parse
const stringToNumber = function(str, arr = [...str], out = 0){
    if( arr[0] === '-' ){ arr.shift() }
    arr.reverse()
    
    const nums = {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 0: 0}
    for (let i = 0; i < arr.length; i++){
        out += nums[arr[i]] * (10**i)
      }
    return str[0] === '-' ? -out : out
}

console.log(stringToNumber("17"))