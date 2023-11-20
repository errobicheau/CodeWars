// CodeWars 2023-7-9 //

/* Description:
Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u. */

// SOLUTION //

function consonantCount(str) {
return str.replace(/[^a-z]|[aeiou]/gi, '').length
}

// END //