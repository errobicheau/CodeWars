// CodeWars 2023-06-29 //

/* Description: Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array. */

// SOLUTION //

function isVow(a){
    const vowels = [97, 101, 105, 111, 117]
    for(let i = 0; i<a.length; i++) {
      if(vowels.includes(a[i])) {
        a[i] = String.fromCharCode(a[i])
      }
    }
    return a
  }

// END //