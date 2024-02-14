/*
Problem :
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

// First Logic
// function evenOrOdd(number) {
//     if (number % 2 == 0){
//         return "Even"
//     } else {
//         return "Odd"
//     }
// }

// Second Logic
const evenOrOdd = (number) => number % 2 == 0 ? "Even" : "Odd"

console.log(evenOrOdd(1))