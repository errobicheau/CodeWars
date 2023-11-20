// CodeWars 2023-5-21 //

/* Description: 
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2. */

// SOLUTION //

function longest(s1, s2) {

    let longestString = []
    const string = s1.concat(s2)
    
    for(let i = 0; i<string.length; i++) {
        if (!longestString.includes(string[i])) {
          longestString.push(string[i])
        }
      }
      
    return longestString.sort().join('')  
      
    }
        
// END //