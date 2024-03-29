// CodeWars 2023-9-10 //

/*Description: 
Arrow style Functions
Come here to practice the Arrow style functions Not much else to say good luck!
Details
You will be given an array of numbers which can be used using the String.fromCharCode() (JS) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

Examples
These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a
*/

// SOLUTION //

const ArrowFunc = arr => {
    return arr.map(ele => String.fromCharCodeAt(ele)).join('')
}

// END //