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
// function litres(time) {
//     return Math.floor(time * 0.5) // or you can use Math.floor(time / 2)
// }

// Third Logic : using bitwise operator
// litres = t => ~~(t / 2)

// Fourth Logic : using parseInt()
// function litres(time) {
//     return parseInt(time / 2)
// }

// Fifth Logic : using bitwise operation v.2
function litres(time) {
    return time>>1
}
/*
Bitwise operation, right shift 1 times.
5(decimal) = 0101(bit) >> 1 => 0010(bit) = 2(decimal)
5(decimal) = 0101(bit) >> 2 => 0001(bit) = 1(decimal)

13(decimal) = 1101(bit) >> 1 => 0110(bit) = 6(decimal)
13(decimal) = 1101(bit) >> 2 => 0011(bit) = 3(decimal)

To expand a bit: it's not just that it's a bitwise right shift (https://en.wikipedia.org/wiki/Logical_shift) 
though, it also casts the number to an integer first by truncating the decimal value. 
So if I had to expand it a little bit I'd say it's like we wrote the following code.

function litres(time) {
  return rightShift(time, 1);
}

function rightShift(value, distance) {
  const intValue = Math.floor(value);
  return intValue / Math.pow(2, distance);
}

You see this pattern a lot in kata solutions: use a bitwise operation that implicitly converts the given number to an integer first. 
For instance const isOdd = x => !!(x => x & 1) first turns x into an integer like it had gone through Math.floor, 
then ANDs (https://en.wikipedia.org/wiki/Bitwise_operation#AND) it with 1 to see if it's lowest bit is set, i.e. 
if it is odd. 
Then the rightmost ! does something similar: casts that 0 or 1 to false or true and returns the opposite. 
Finally the leftmost ! returns the opposite of that value, which is still a boolean. 
Or you might see const floor = x => ~~x which converts to an Integer, flips every bit, 
and then flips every bit back (a bitwise NOT or "complement" operation). 
Hope that helps!
*/

console.log(litres(2))
console.log(litres(1.4))
console.log(litres(12.3))
console.log(litres(0.82))
console.log(litres(11.8))
console.log(litres(1787))
console.log(litres(0))