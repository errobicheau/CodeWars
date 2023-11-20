// CodeWars 2023-6-1 //

/* Description: 
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */

// SOLUTION //

const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((acc, c) => acc + c, 0)

// END //