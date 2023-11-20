// CodeWars 2023-7-24 //

/* Description: 
*/

// SOLUTION //

function SeriesSum(n) {
    let result = 0
    let advance = 1
    for (let i = 0; i < n; i += 1) {
      if (i === 0) {
        result = 1
      } else {
        advance += 3
        result = result + (1 / advance)
      }
    }
    return result.toFixed(2)
}

// END //