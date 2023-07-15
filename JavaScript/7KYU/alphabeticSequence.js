// CodeWars 2023-07-15 //

/* Description: In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetically, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.

Example
alphaSeq("ZpglnRxqenU") -> "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"
Technical Details
The string will include only letters.
The first letter of each sequence is uppercase followed by n-1 lowercase.
Each sequence is separated with a comma.
Return value needs to be a string. */

// SOLUTION //

function alphaSeq (str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
    let result = []
    
    for(let char of str) {
      char = char.toLowerCase()
    
      const index = alphabet.indexOf(char)
      const sequence = char.toUpperCase() + char.repeat(index)
      result.push(sequence)
    }
    
    return result.sort().join(',')
  }

// END //