// CodeWars 2023-12-12 //

/* Description: Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7] */

// SOLUTION //

function largest(n, array) {
    let sorted = array.sort((a, b) => a - b)
    return sorted.slice(sorted.length-n, sorted.length)
  }

// END //