// First answer, verbose and too much code. Actual solution below is much simpler, but perhaps not specific to the tests.
// Solutions saves a return statement from my first solution.

// function numberChecker(number) {
//   if (number === 1000 || number === 10) {
//     return true;
//   } else if (number === 9 || number === 6) {
//     return false;
//   } else {
//     return false;
//   }
// }

// Odin solution
function numberChecker(number) {
  if (number >= 10) {
    return true;
  } else {
    return false;
  }
}


// Do not edit below this line
module.exports = numberChecker;
