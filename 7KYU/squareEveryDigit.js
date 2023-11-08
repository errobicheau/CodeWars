// CodeWars 2023-11-08 //

/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding! */

// SOLUTION //

function squareDigits(num) {
    let squaredArr = []
    num = String(num)
      
    let splitArr = num.split('')
    
    splitArr.forEach(digit => { squaredArr.push(Math.pow(digit, 2)) })
    
    return Number(squaredArr.join(''))
  }

// TEST CASES //

console.log(squareDigits(3212)) // expected result: 9414
console.log(squareDigits(2112)) // expected result: 4114
console.log(squareDigits(0)) // expected result: 0

// END //