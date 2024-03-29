/*
Problem :
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Output :
35231 => [1,3,2,5,3]
0 => [0]
*/

// First Logic : using string(), split(), map() and reverse()
// function digitize(n) {
//     //code here
//     return String(n).split("").map(Number).reverse()
// }

// Second Logic : using while condition
// function digitize(n) {
//     //code here
//     let numArr = [];
//     while(n > 0){
//         numArr.push(n % 10);
//         n = Math.floor(n/10);
//     }
//     return numArr;
// }

// Third Logic : using for condition number
// const digitize = (x) => {
//     x = `${x}`.split('').reverse();
//     let a = []
//     for(let i = 0; i < x.length; i++){
//       a.push(+x[i])
//     }
//     return a
// }

// Fourth Logic : using for condition string
function digitize(n) {
    //code here
    let num = String(n);
    let newArray = [];
    
    for (let i = num.length-1; i>=0; i--) {
      let element = Number(num[i]);
      newArray.push(element); 
    }
    return newArray;
}

console.log(digitize(35231))