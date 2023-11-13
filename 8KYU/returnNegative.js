// CodeWars 2023-11-13 //

/* Description: 
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. */

// SOLUTION //

function makeNegative(num) {
    return num > 0 ? num * -1 : num
  }

// TEST CASES //

console.log(makeNegative(3)) //expected: -3
console.log(makeNegative(9)) //expected: -9
console.log(makeNegative(-9)) //expected: -9
console.log(makeNegative(0.12)) //expected: -0.12

// END //