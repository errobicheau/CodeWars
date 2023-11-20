// CodeWars 2023-10-0 //

/* Description: 
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate. */

// SOLUTION //

function mergeArrays(a, b) {
    let uniqueArray = []
    let joinedArray = a.concat(b)
    
    joinedArray = joinedArray.sort((a, b) => a - b)
    
    for(let i = 0; i < joinedArray.length; i++) {
      if(joinedArray[i] !== joinedArray[i-1]) {
        uniqueArray.push(joinedArray[i])
      }
    }
    return uniqueArray
  }
  

// END //