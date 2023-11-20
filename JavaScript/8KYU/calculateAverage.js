// CodeWars 2023-6-10 //

/* Description:

*/

// ORIGINAL SOLUTION //

// function findAverage(array) {
//     let average = (array.reduce((a, b) => a + b, 0)) / array.length
//     if(array.length === 0) {
//         return 0
//     } else {
//         return average
//     }
// }

// REFACTORED SOLUTION //

const findAverage = array => array.length === 0 ? 0 : (array.reduce((a, b) => a + b, 0)) / array.length

// END //