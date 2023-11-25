// CodeWars 2023-11-24 //

/* Description: 
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched. */

// SOLUTION //

function pigIt(str){
  
    let pigArray = []
    str = str.split(' ')
    
    str.forEach(word => {
      if(word[0].match(/[a-z]/i)) {
        pigArray.push(word.slice(1) + word[0] + 'ay')    
      } else {
        pigArray.push(word[0])
      }
      
    })
    return pigArray.join(' ')
  }

// TEST CASES //

pigIt('Pig latin is cool') // igPay atinlay siay oolcay
pigIt('Hello world !') // elloHay orldway !

// END //