/*
Problem :
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// First Logic
// function solution(str){
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }

// Second Logic
function solution(str){
    let splitString = str.split("");

    let reverseArray = splitString.reverse();

    let joinArray = reverseArray.join("");

    return joinArray;
}

console.log(solution("World"));