/*
Problem :
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Example :
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// First Logic : using while condition
// function repeatStr (n, s) {
//     let newString = ""
//     while (n > 0) {
//         newString += s
//         n--
//     }
//     return newString;
// }

// Second Logic : using conditional and recursion
// function repeatStr (n, s) {
//     // Step 1 : Check if number is negative and return an empty string if true
//     if (n < 0) {
//         return ""
//     }

//     // Step 2 : Check if number is negative and return the string itself if it's the case.
//     if (n === 1) {
//         return s
//     }

//     // Step 3 : Use recursion
//     else {
//         return s + repeatStr(n - 1, s)
//     }
// }

// Third Logic : Using repeat() function ES6
function repeatStr (n, s) {
    if (n > 0) {
        return s.repeat(n)
    } else {
        return ""
    }
}

console.log(repeatStr(3, "*"))