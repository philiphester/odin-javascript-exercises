// My solution
const reverseString = function(string) {
    let reversed = "";

    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
};

// Coding the Odin solution - Using array methods
/*
const reverseString = function(string) {
    return string.split("").reverse().join("");
};
*/

// Do not edit below this line
module.exports = reverseString;
