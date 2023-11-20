// CodeWars 2023-6-19 //

/* Description:
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK" */

// SOLUTION //

const isAnagram = (test, original) => {
    let sortedTest = test.toLowerCase().split('').sort().join('')
    let sortedOriginal = original.toLowerCase().split('').sort().join('')
    
   return sortedTest === sortedOriginal
}

// END //