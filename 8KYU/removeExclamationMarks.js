// CodeWars 2023-5-17 //

/* Description: 
Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

// SOLUTION //

const removeExclamationMarks = s => s.split('').filter(ele => ele != '!').join('')

// Can also be solved using only string methods with a regular expression 

// const removeExclamationMarks = s => s.replace(/!/g, '')

// END //