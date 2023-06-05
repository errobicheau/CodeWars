// CodeWars 2023-6-05 //

/* Description: 
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */

// SOLUTION //

function fakeBin(x){
    let split = x.split('')
    let newArr = []
    
    for(let i = 0; i < split.length; i++) {
      if(split[i] >= 5) {
        newArr.push('1')
      }else{
        newArr.push('0')
      }
    } 
      return newArr.join('')  
}

// END //