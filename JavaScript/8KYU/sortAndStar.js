// CodeWars 2023-11-23 //

/* Description:
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array. */

// SOLUTION //

function twoSort(s) {
  
    let firstWord = s.sort()[0];
    let result = firstWord.split('').join('***');
    
    return result
  
  }

// TEST CASES //

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])) //expected result: 'b***i***t***c***o***i***n'
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])) //expected result: 'a***r***e'

// END //