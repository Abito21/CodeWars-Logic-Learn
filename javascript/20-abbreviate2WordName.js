/*
Problem :
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

// First Logic : using split(), map() and join()
function abbrevName(name){
    // code away
    let initName = name.split(" ").map((word) => word[0].toUpperCase()).join(".")
    return initName
}

console.log(abbrevName("Abid Juliant"))
console.log(abbrevName("Juliant Indraswara"))
console.log(abbrevName("abid indraswara"))
console.log(abbrevName("Abid Juliant indraswara"))