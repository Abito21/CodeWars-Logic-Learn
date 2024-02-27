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
// function century(year) {
//     // Finish this :)
//     return Math.ceil(year / 100);
// }

// Third logic : using formula
// function century(year) {
//     // Finish this :)
//     return (year + 99) / 100 | 0;
// }

// Fourth Logic : change the number to string
let centuryEnd;

function century(inYear) {
  let century;
  const newYear = String(inYear);

  const year = newYear.split('').join('');
  const len = year.length;

  if (`${year[len - 2]}${year[len - 1]}` === String('00')) {
    century = Math.round(Number(inYear) / 100);
  } else
  if (year.length < 3) {
    century = 1;
  } else
  if (year.length > 4) {
    century = Math.ceil(Number(inYear) / 100);
  } else {
    centuryEnd = `${year[0]}${Number(year[1]) + 1}00`;

    century = Math.round(centuryEnd / 100);
  }

  return century;
}

console.log(century(1));
console.log(century(99));
console.log(century(1702));
console.log(century(1988));
console.log(century(2000));
console.log(century(2001));