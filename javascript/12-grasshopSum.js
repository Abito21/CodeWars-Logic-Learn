/*
Problem :
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

Example :
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

// First Logic : using for condition
// var summation = function (num) {
//     // Code here
//     let sum = 0
//     for (i = num; i >= 1; i--) {
//         sum += i
//     }
//     return sum
// }

// Second Logic : using for condition
// var summation = function (num) {
//     // Code here
//     let sum = 0
//     for (i = 1; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }

// Third Logic
// const summation = num => num * (num + 1) / 2 

// Fourth Logic using reduce
const summation = num => (
    Array(num).fill(true).reduce((sum, item, index) => sum + index + 1, 0)
)

console.log(summation(8))