// CodeWars 2023-10-16 //

/* Description: 
Work out what number day of the year it is.

toDayOfYear([1, 1, 2000]) => 1
The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

The year can be evenly divided by 4;
If the year can be evenly divided by 100, it is NOT a leap year, unless;
The year is also evenly divisible by 400. Then it is a leap year. */

// SOLUTION //

function toDayOfYear(date) {
    const [day, month, year] = date;
    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  
    if (isLeapYear) {
      daysInMonth[2] = 29;
    }
  
    let dayOfYear = day
    for (let i = 1; i < month; i++) {
      dayOfYear += daysInMonth[i];
    }
  
    return dayOfYear;
  }

// END //