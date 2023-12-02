// CodeWars 2023-12-01 //

/* Description: 
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */

// SOLUTION //

function solution(str){
    let size = 2
    let result = []
    
    for(let i = 0; i < str.length; i += size) {
      let chunk = str.slice(i, i + size)
      result.push(chunk)
    }
  
    if(str.length % 2 !== 0) {
      result[result.length-1] = result[result.length-1] + '_'
    }
    return result
    
  }

// END //