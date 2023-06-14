// CodeWars 2023-6-14 //

/* Description: 
*/

// ORIGINAL SOLUTION //

// function multipleOfIndex(array) {
//     let multiples = []
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === 0) {
//             multiples.push(array[i])
//         }else if(array[i] % i === 0) {
//             multiples.push(array[i])
//         }
//     }
// }

// REFACTORED SOLUTION //

function multipleOfIndex(array) {
    return array.filter((ele,index) => ele == 0 || ele % index === 0)
  }

// END //