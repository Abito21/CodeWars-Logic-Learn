/*
Problem :
You get an array of numbers, return the sum of all of the positives ones.

Example :
[1,-4,7,12] => 1 + 7 + 12 = 20

Notes : 
If there is nothing to sum, the sum is default to 0.
*/

// First Logic
function positiveSum(arr) {
    let result = 0
    if (arr.length == 0) {
        return result = 0
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                result += 0
            } else if (arr[i] > 0) {
                result += arr[i]
            }
        }
        return result;
    }
}

console.log(positiveSum([-1,-2,0,4,5]))