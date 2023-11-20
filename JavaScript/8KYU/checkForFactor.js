// CodeWars 2023-8-8 //

/* Description 
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6 */

// SOLUTION //

function checkForFactor (base, factor) {
    return base % factor == 0 ? true : false
  }

// END //