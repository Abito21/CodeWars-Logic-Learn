/*
Problem :
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

// First Logic
function boolToWord( bool ){
    if (bool == true) {
        return "Yes"
    } else {
        return "No"
    }
};

console.log(boolToWord(false));