/*
Problem :
Given an array of integers, return a new array with each value doubled.

Example:
[1, 2, 3] --> [2, 4, 6]
*/

// First Logic : using map() function
// function maps(x){
//     return x.map(n => n * 2)
// }

// Second Logic : using for and push() array function
function maps(x){
    let newArr = []
    for (i = 0; i < x.length; i++) {
        newArr.push(x[i] * 2)
    }
    return newArr
}

console.log(maps([1, 2, 3]))
console.log(maps([4, 1, 1, 1, 4]))
console.log(maps([2, 2, 2, 2, 2, 2]))
