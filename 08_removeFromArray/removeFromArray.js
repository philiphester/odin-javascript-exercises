// My solution
const removeFromArray = function(arr) {
    const args = Array.from(arguments);
    args.shift();
    
    args.map( arg => {
        while (arr.includes(arg) == true) {
            arr.splice(arr.indexOf(arg), 1);
        } 
    });
    return arr;
};

// Solutions after reviewing Odin solution
/*
const removeFromArray = function(arr, ...args) {
    return arr.filter(item => !args.includes(item));
};

const removeFromArray = function(arr, ...args) {
    let newArr = [];
    arr.forEach(function(item) {
        if (!args.includes(item)) {
            newArr.push(item);
        }
    });
    return newArr;
};
*/

// Do not edit below this line
module.exports = removeFromArray;
