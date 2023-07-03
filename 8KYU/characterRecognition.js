// CodeWars 2023-7-3 //

/* Description: 
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake. */

// SOLUITION //

const correct = string => {
    let split = string.split('')
    for(let i = 0; i < split.length; i++) {
      if (split[i] === '1'){
        split[i] = 'I'
      }else if (split[i] === '5'){
        split[i] = 'S'
      }else if (split[i] === '0'){
        split[i] = 'O'
      }
    }
    return split.join('')
  }

// END //