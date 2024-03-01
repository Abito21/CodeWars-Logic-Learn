/*
Problem :
Make a function that will return a greeting statement that uses an input; your program should return, 
"Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/

// First Logic : using template literals
// function greet(name){
//     //your code here
//     return `Hello, ${name} how are you doing today?`
// }

// Second Logic : using plus string
// function greet(name){
//     //your code here
//     return "Hello, " + name + " how are you doing today?"
// }

// Third Logic : using ASCII code
// function greet(name){
//     //your code here
//     return `\x48\x65\x6c\x6c\x6f\x2c\x20${name}\x20\x68\x6f\x77\x20\x61\x72\x65\x20\x79\x6f\x75\x20\x64\x6f\x69\x6e\x67\x20\x74\x6f\x64\x61\x79\x3f`
// }

// Fourth Logic : using replace() function
function greet(name){
    return "Hello, <name> how are you doing today?".replace("<name>", name);
}

console.log(greet("Abid"))
console.log(greet("Juliant"))
console.log(greet("Indraswara"))