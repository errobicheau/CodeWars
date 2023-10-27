// CodeWars 2023-10-27 //

/* Description: 

Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8) */

// SOLUTION //

var summation = function (num) {
    let sum = 0
    for(let i = 0; i<=num; i++) {
      sum += i 
    };
    return sum
  }

// TEST CASES //

console.log(summation(8)) //expect: 36
console.log(summation(5)) //expect: 15
console.log(summation(3)) //expect: 6
console.log(summation(10)) //expect: 55 

// END //