/*
Problem :
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

// // First Logic : using if else condition
// function lovefunc(flower1, flower2){
//     // moment of truth
//     if (flower1 % 2 == 0 && flower2 % 2 != 0) {
//         return true
//     } else if (flower2 % 2 == 0 && flower1 % 2 != 0) {
//         return true
//     } else {
//         return false
//     }
// }

// Second Logic : using simple if else condition
// function lovefunc(flower1, flower2){
//     // moment of truth
//     return flower1 % 2 !== flower2 % 2;
// }

// Third Logic
function lovefunc(flower1, flower2){
    // moment of truth
    return (flower1 + flower2) % 2 === 1
}

// or u can use thid logic
// const lovefunc = (Sarah, Timmy) => Boolean((Sarah+Timmy)%2);

console.log(lovefunc(1,4))
console.log(lovefunc(2,2))
console.log(lovefunc(0,1))
console.log(lovefunc(0,0))
