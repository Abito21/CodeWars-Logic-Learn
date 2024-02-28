/*
Problem :
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

Example :
time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

// First Logic : using Math.floor() function
// function litres(time) {
//     let cycle = 0.5
//     let totalLitres = time * cycle
//     return Math.floor(totalLitres)
// }

// Second Logic : using Math.floor() function best practice
function litres(time) {
    return Math.floor(time * 0.5) // or you can use Math.floor(time / 2)
}

console.log(litres(2))
console.log(litres(1.4))
console.log(litres(12.3))
console.log(litres(0.82))
console.log(litres(11.8))
console.log(litres(1787))
console.log(litres(0))