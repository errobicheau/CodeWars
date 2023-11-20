/*
Create a function that will return true if the input is in the following date time format 01-09-2016 01:20 and false if it is not.
*/

// SOLUTION //

function dateChecker(date){
    if (date[2]=='-'&& date[5]=='-' && date[13]==':' && date.length==16){
      return true
    }else{
      return false
    }
}

// DATE