/*
Problem :
Given an array of integers your solution should find the smallest integer.

Example :
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

// First Logic
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       const sorted = args.sort((num1, num2) => num1 - num2)
//       return sorted[0]
//     }
// }

// Second logic
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
}

let sif = new SmallestIntegerFinder()
console.log(sif.findSmallestInt([78,56,232,12,8]))