// CodeWars 2023-5-12"

/* Description
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits. */

// SOLUTION //

function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }

// END //