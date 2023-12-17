// CodeWars 2023-12-17 //

/* Description: Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.

You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places. */

// SOLUTION //

function calculate_total(subtotal, tax, tip) {
    tax = (tax / 100) * subtotal
    tip = (tip / 100) * subtotal
    let grandTotal = subtotal + tax + tip
    
    return Number((grandTotal).toFixed(2))
  
  }

// END //