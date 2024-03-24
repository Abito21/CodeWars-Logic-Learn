/*
Problem :
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

// First Logic : using toString() function
// function booleanToString(b){
//     //your code here
//     return b.toString()
// }

// Second Logic : using String() function
// function booleanToString(b){
//     //your code here
//     return String(b)
// }

// Third Logic : using if-else 
function booleanToString(b){
    //your code here
    return b ? 'true' : 'false'
}

console.log(booleanToString(true))
console.log(booleanToString(false))