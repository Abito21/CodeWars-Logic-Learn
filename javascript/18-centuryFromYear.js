/*
Problem :
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Given a year, return the century it is in.

Example :
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28

Note: this kata uses strict construction as shown in the description and the examples, you can read more about it 
https://en.wikipedia.org/wiki/Century 
*/

// First Logic : using for
// function century(year) {
//     // Finish this :)
//     let result = 0
//     for (let i = 0; i < year; i++) {
//         if (i % 100 === 0) {
//             result ++
//         }
//     }
//     return result;
// }

// Second logic : using Math.ceil function
function century(year) {
    // Finish this :)
    return Math.ceil(year / 100);
}

console.log(century(1));
console.log(century(99));
console.log(century(1700));
console.log(century(1988));
console.log(century(2000));
console.log(century(2001));