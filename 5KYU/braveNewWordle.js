// CodeWars 2023-5-1 //

/* 
Wordle is a game where users try to guess a hidden 5 letter word. Feedback is given for each guess, in the form of colored tiles, indicating when letters match or occupy the correct position.

The Brief
Make a function that takes in a 5 letter guess and, comparing to a known solution, returns clues for the user to solve the wordle puzzle.

Requirements
The function takes in two strings of 5 letters each, a guess and a solution.
The function returns a string of 5 letters.
The returned string is composed of letters each corresponding to a letter of the guess: 'b' (black) when the letter is not present in the answer; 'y' (yellow) when the letter is present but in a different location; and 'g' (green) when the letter is present and in the right location.

Duplicates
A letter appearing in the correct place is always green, including if it appears elsewhere in the word.
A letter can only be green or yellow as many times as it appears in the correct answer. Extra occurences of that letter are marked as 'b'.
Letters are evaluated left to right.
 */

// SOLUTION //

function resolver(guess, solution){
    guess = guess.split('')
    solution = solution.split('')
    let output = Array(5).fill('b')
    
    for (let i = 0; i < 5; i++) {
      if (guess[i] === solution[i]) {
        output[i] = 'g'
        guess[i] = ''
        solution[i] = ''
      }
    }
    
    for (let i = 0; i < guess.length; i++) {
      if (!guess[i] ) {
        continue
      }
      if (solution.includes(guess[i])) {
        output[i] = 'y'
        solution[solution.indexOf(guess[i])] = ''
      }
    }
    
    return output.join('')
}

// END //