// CodeWars 2023-6-8 //

/* Description: 
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same. */

// SOLUTION //

function distinct(a) {
    let noDupes = []
    for(let i = 0; i<a.length; i++) { 
      if(!noDupes.includes(a[i])) {
        noDupes.push(a[i])
      }
    }
    return noDupes;
  }

// END //