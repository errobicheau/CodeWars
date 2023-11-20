/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// SOLUTION //

function xo(str) {
    let oCount = 0
    let xCount = 0
    for(let letter of str){
    let upperCaseLetter = letter.toUpperCase()
    if(upperCaseLetter === 'X'){
      xCount++
    }else if(upperCaseLetter === 'O'){
      oCount++
    }
  }
  return oCount == xCount
}

// END //