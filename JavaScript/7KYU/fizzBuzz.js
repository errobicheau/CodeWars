// CodeWars 2023-11-10 //

/* Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"] */

// SOLUTION // 

function fizzbuzz(n){
    let fbArray = []
    for(let i = 1; i <= n; i++) {
       (i % 3 == 0 && i % 5 == 0) ? fbArray.push('FizzBuzz') 
       : (i % 3 == 0) ? fbArray.push('Fizz') 
       : (i % 5 == 0) ? fbArray.push('Buzz') 
       : fbArray.push(i) 
    }
    return fbArray
  }

// TEST CASES //

console.log(fizzbuzz())
console.log(fizzbuzz())
console.log(fizzbuzz())
console.log(fizzbuzz())

// END //

