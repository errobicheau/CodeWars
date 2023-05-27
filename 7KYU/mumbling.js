// CodeWars 2023-5-27 //

/* Description: 
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

// ORIGINAL SOLUTION //

function accum(s) {
    let array = s.split('')
    let newArr = []
    
    for(let i = 0; i < array.length; i++) {
      newArr.push(`${array[i].toUpperCase()}`)
      newArr.push(`${array.join('').toLowerCase()[i].repeat(i)}`)
      newArr.push(`-`)
    }
  newArr.pop()
  return newArr.join('')
  }

// REFACTORED SOLUTION //
  
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
}

// END //