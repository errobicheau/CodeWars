/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

// SOLUTION //

function between(a, b) {
    //set empty array
    let between = []
    //start at a and ++ through each number starting until value = b
    for (let i = a; i <= b; i++){
    // push onto array
    between.push(i);  
    }
    //return array
    return between
  }

// END //