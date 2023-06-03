// CodeWars 2023-6-3 //

/* Description: 
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb' */

// SOLUTION //

function switcheroo(x){

    let splitStr = x.split('')
  
    for(let i = 0; i<splitStr.length; i++){
      if(splitStr[i] === 'a'){
        splitStr[i] = 'b'
      }else if(splitStr[i] === 'b') {
        splitStr[i] = 'a'
      }
    }
      return splitStr.join('')  
  }

// END //
