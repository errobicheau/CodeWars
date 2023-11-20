// CodeWars 2023-10-13 //

/* Description: At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age]. */

// SOLUTION //

function differenceInAges(ages){
    let resultsArray = []
    let sorted = ages.sort((a, b) => a - b)
    
    resultsArray.push(sorted[0])
    resultsArray.push(sorted[sorted.length-1])
    resultsArray.push(sorted[sorted.length-1] -sorted[0])
    
    return resultsArray
  }

// REFACTORED SOLUTION //

function differenceInAges(ages){
    
    let max = Math.max(...ages)
    let min = Math.min(...ages)
    let difference = (max - min)

    return [min, max, difference]
    
  }

// TEST CASES //

const testInput1 = [45, 28, 18, 72, 5, 3, 90];
const testInput2 = [30, 25, 35, 40, 20];
const testInput3 = [5, 5, 5, 5];
const testInput4 = [0, 0, 0, 0, 0, 0];
const testInput5 = [60, 70, 80, 90, 100];

// END //