// CodeWars 2023-11-21 //

/* Description: 
Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
should return false:

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero") */

// SOLUTION //

function isDigit(s) {

    s = s.trim();

    if (s === '') {
      return false;
    }
  
    const numericValue = Number(s);
    return !isNaN(numericValue) && isFinite(numericValue);
  }
  
// TEST CASES //
  console.log(isDigit("3"));//expected return: true
  console.log(isDigit("  3  "));    // expected return: true
  console.log(isDigit("-3.23"));    // expected return: true
  console.log(isDigit("3-4"));      // expected return: false
  console.log(isDigit("  3   5"));   // expected return: false
  console.log(isDigit("3 5"));      // expected return: false
  console.log(isDigit("zero"));     // expected return: false
  