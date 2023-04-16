/* 
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

//ORIGINAL SOLUTION //

function noOdds(arr){
    return arr.filter(a => a%2 === 0)
  }


// REFACTORED SOLUTION //

const noOdds = arr => arr.filter(a => a%2 === 0)

// END //