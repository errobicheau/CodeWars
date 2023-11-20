// CodeWars 2023-11-07 //

/* Description: 
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR". */

// SOLUTION //

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {

    const isCodeValid = enteredCode === correctCode;
  
    const currentDateObj = new Date(currentDate);
    const expirationDateObj = new Date(expirationDate);
  
    const isNotExpired = currentDateObj <= expirationDateObj;
  
    return isCodeValid && isNotExpired;
  }
  

// TEST CASES //

console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"))// return true
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")) //return false

// END //