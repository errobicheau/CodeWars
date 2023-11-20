// CodeWars 2023-7-5 //

/* Description:
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 */

// SOLUTION //

function sumOfDifferences(arr) {
    let newArr = []
    let reversed = arr.sort((a, b) => b - a)
    for(let i = 0; i<reversed.length-1; i++) {
      newArr.push(reversed[i] - reversed[i+1])
    }
    return newArr.reduce((a, b) => a+b, 0)
  
  }

// END //