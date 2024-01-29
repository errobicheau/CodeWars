// CodeWars 2024-01-23 //

/* Description: You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

In practice, you should implement this function:

function eliminateUnsetBits(number);
Examples
eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
eliminateUnsetBits("111") ->  7
eliminateUnsetBits("1000000") -> 1
eliminateUnsetBits("000") -> 0s */

// SOLUTION //

function eliminateUnsetBits(number) {
  
    if(!number.includes(1)) {
      return 0
    } else {
      
      let ones = number.split('').filter(num => {
        return num == 1
        })
    
    ones = ones.join('')
    return parseInt(ones, 2)
      
    }
  }

// END //