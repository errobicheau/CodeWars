// CodeWars 2023-7-11 //

/* Description:
*/

// ORIGINAL SOLUTION //

function isLeapYear(year) {
    if(year % 400 == 0) {
      return true
    }else if(year % 100 == 0) {
      return false
    }else if(year % 4 == 0) {
      return true
    }else{
      return false
    }
}

// REFACTORED SOLUTION //


function isLeapYear(year) {
    if(year%400 == 0) return true;
    if(year%100 == 0) return false;
    if(year%4 == 0) return true;
    return false;
}

// END //