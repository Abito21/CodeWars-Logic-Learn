/*
Problem :
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Example :
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// First Logic : using while condition
function repeatStr (n, s) {
    let newString = ""
    while (n > 0) {
        newString += s
        n--
    }
    return newString;
}

console.log(repeatStr(3, "*"))