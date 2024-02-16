/*
Problem :
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
*/

// First Logic
// function removeChar(str) {
//     let newChar = ""
//     for (i = 1; i < str.length - 1; i++) {
//         newChar += str[i]
//     }
//     return newChar;
// };

// Second Logic
// function removeChar(str) {
//     let newChar = str.substring(1, str.length - 1)
//     return newChar
// };

// Third Logic
function removeChar(str) {
    let newChar = str.slice(1, -1)
    return newChar
};

console.log(removeChar("Helloo"));