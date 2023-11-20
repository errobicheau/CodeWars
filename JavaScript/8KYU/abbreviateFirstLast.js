// CodeWars 2023-5-14 //

/* Description 
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

// SOLUTION //

const abbrevName = name => `${name.toUpperCase()[0]}.${name.toUpperCase()[name.indexOf(' ')+1]}`

// END //