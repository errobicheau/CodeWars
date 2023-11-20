// CodeWars 2023-10-12 //

/* Description: Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.*/

// SOLUTION //

const findAverage = function (nums) {
    let reduced = nums.reduce((a, b) => a + b, 0)
    return reduced / nums.length
  }

// TEST CASES //

// Test Cases

console.log(findAverage([1, 2, 3, 4, 5])); // Expected Output: 3
console.log(findAverage([-2, 0, 2, -4, 4])); // Expected Output: 0
console.log(findAverage([5, 5, 5, 5, 5, 5])); // Expected Output: 5
console.log(findAverage([1, 2, 3, 4, 5, 6])); // Expected Output: 3
console.log(findAverage([])); // Expected Output: null or undefined
console.log(findAverage([10])); // Expected Output: 10

// END //