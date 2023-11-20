// CodeWars 2023-3-20 //

/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

// SOLUTION //

// function positiveSum(arr){
//     let sum = 0
//     arr.forEach(ele => {
//         if(ele < 0){
//             sum += ele
//         }
//     })
//     return sum
// }

// REFACTORED SOLUTION //

const positiveSum = arr => arr.reduce((a,b)=> a + (b > 0 ? b : 0), 0)

// END //