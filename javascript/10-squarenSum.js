/*
Problem :
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

// First Logic
// function squareSum(numbers){
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i] ** 2;
//     }
//     return result
// };

// Second Logic
// function squareSum(numbers){
//     return numbers.reduce((sum,num) => sum + (num * num), 0);
// };

// Third Logic
function squareSum(numbers){
    var sum = 0;
    numbers.forEach(function(n) {
        sum += n ** 2
    });
    return sum;
};

console.log(squareSum([1, 5]));