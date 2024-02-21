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
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
// }

// Third Logic
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min.apply(null, args);
//     }
// }

// Fourth Logic
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return args.reduce(function(prev, curr, index, array) {
//         return prev < curr ? prev : curr;
//       });
//     }
// }

// Fifth Logic
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       var lowest;
//       for(var i in args){
//         if(i==0){
//           lowest = args[i];
//         }
//         else {
//           if(lowest >= args[i]){
//           lowest = args[i];
//           }
//         }
//       }
//       return lowest;
//     }
// }

// Sixth Logic
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min = args[0];
      for(let i = 0; i< args.length; i++) {
        min = min < args[i] ? min : args[i]
      }
      return min;
    }
}

let sif = new SmallestIntegerFinder()
console.log(sif.findSmallestInt([78,56,232,12,8]))