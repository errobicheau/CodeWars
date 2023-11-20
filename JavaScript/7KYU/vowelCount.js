// CodeWars 2023-11-3 //

/* Description: 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

// SOLUTION //

function getCount(str) {
    let vowels = ['a','e','i','o','u']
    let vowelCount = 0;
    str.split('').forEach(letter => {
      if(vowels.includes(letter)) {
        vowelCount++
      }
    })
    return vowelCount;
  }

// TEST CASES // 

console.log(getCount('abracadabra'))
console.log(getCount('the quick brown fox jumps over the lazy dog'))
console.log(getCount('my rhythms fly my rhythms cry'))

// END //