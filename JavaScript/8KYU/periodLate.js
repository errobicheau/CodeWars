/*
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.
*/

// ORIGINAL SOLUTION //

/*
function periodIsLate(last, today, cycleLength){
    let daysSinceLastPeriod = (today.getTime() - last.getTime())/86400000;
    if(daysSinceLastPeriod > cycleLength){
      return true
    }
      return false
  }
*/

// REFACTORED SOLUTION //

const periodIsLate = (last, today, cycleLength) => (today.getTime() - last.getTime())/86400000 > cycleLength ? true : false

// END //