// My solution
const sumAll = function(num1, num2) {
    sortedArgs = [num1, num2].sort((a, b) => a - b);
    if (sortedArgs.find(arg => (!Number.isInteger(arg)) || arg < 0)) return "ERROR";
    arr = [];
    for (let i = sortedArgs[0]; i <= sortedArgs[1]; i++) {
        arr.push(i);
    }
    return arr.reduce((sum, current)=> sum += current, 0);
};

// Solution after reviewing Odin answer
/*
const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        [min, max] = [max, min];
    }
    sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};
*/

// Do not edit below this line
module.exports = sumAll;
