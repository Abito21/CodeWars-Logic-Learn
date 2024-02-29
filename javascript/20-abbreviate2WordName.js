/*
Problem :
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

// First Logic : using split(), map() and join()
// function abbrevName(name){
//     // code away
//     let initName = name.split(" ").map((word) => word[0].toUpperCase()).join(".")
//     return initName
// }

// Second Logic : using split(), map() and array
function abbrevName(name){
    // code away
    let nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

// Third Logic : using split(), map(), substr() and join()
function abbrevName(name){
    // code away
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

console.log(abbrevName("Abid Juliant"))
console.log(abbrevName("Juliant Indraswara"))
console.log(abbrevName("abid indraswara"))
console.log(abbrevName("Abid Juliant indraswara"))