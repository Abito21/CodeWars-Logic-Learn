/*
Problem :
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.
*/

// First Logic : using if-else condition
// function areYouPlayingBanjo(name) {
//     // Implement me
//     // if (name[0].toLowerCase() === 'r') {
//     if (name[0] === "R" || name[0] === "r") {
//         return `${name} plays banjo`;
//     } else {
//         return `${name} does not play banjo`
//     }
// }

// Second Logic : using if-else ternary condition
// function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }

// Third Logic : using if-else ternary statement variable
// const areYouPlayingBanjo = name => {
// 	const plays = name.toLowerCase().startsWith('r')
// 		? 'plays'
// 		: 'does not play';
// 	return `${name} ${plays} banjo`;
// }

// Fourth Logic : using match() function and RegEx-RegularExpression
function areYouPlayingBanjo(name) {
    return name.match(/^r.+/i) ? `${name} plays banjo` : `${name} does not play banjo`;
    // Also you can use this one using test() function
    // return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
}

console.log(areYouPlayingBanjo("Adam"))
console.log(areYouPlayingBanjo("Paul"))
console.log(areYouPlayingBanjo("Ringo"))
console.log(areYouPlayingBanjo("bravo"))
console.log(areYouPlayingBanjo("rolf"))