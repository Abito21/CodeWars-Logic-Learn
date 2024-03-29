/*
Problem :
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

Example :
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

// First Logic
// function countSheeps(sheep) {
//     // TODO
//     let count = 0
//     for (i = 0; i < sheep.length; i++) {
//         if (sheep[i] == true) {
//             count += 1
//         } else {
//             count += 0
//         }
//     }
//     return count
// }

// Second Logic
// Filter function is a callback Function that return true condition.
// function countSheeps(sheep) {
//     return sheep.filter(Boolean).length;
// }

// Third Logic 
// function countSheeps(arrayOfSheep) {
//     var count = 0;
    
//     arrayOfSheep.forEach( function (sheep) {
//       if (sheep)
//         count++;
//     });

//     return count;
// }

// Fourth Logic
function countSheeps(arrayOfSheep) {
    // TODO
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  }

console.log(countSheeps([undefined,null,false,true,false,true]))