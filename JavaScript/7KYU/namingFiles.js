// CodeWars 2024-01-11 //

/* Description: Naming multiple files can be a pain sometimes.

Task:
Your job here is to create a function that will take three parameters, fmt, nbr and start, and create an array of nbr elements formatted according to frm with the starting index start. fmt will have <index_no> inserted at various locations; this is where the file index number goes in each file.

Description of edge cases:
If nbr is less than or equal to 0, or not whole, return an empty array.
If fmt does not contain '<index_no>', just return an array with nbr elements that are all equal to fmt.
If start is not an integer, return an empty array.
What each parameter looks like:
typeof frm #=> 'string'
  : "text_to_stay_constant_from_file_to_file <index_no>"
typeof nbr #=> 'number'
  : number_of_files
typeof start #=> 'number'
  : index_no_of_first_file
typeof (nameFile(frm, nbr, start)) #=> 'array' */

// SOLUTION //

function nameFile(fmt, nbr, start) {
    let result = [];
  
    //Edge Cases
    if (nbr <= 0 || nbr % 1 !== 0) {
      return [];
    }
    if (!fmt.includes('<index_no>')) {
      for(let i = 0; i < nbr; i++) {
        result.push(fmt)
      }
      return result;
    }
    if (!Number.isInteger(start)) {
      return [];
    }
    
    
    //Main Code
    for (let i = start; i < start + nbr; i++) {
      result.push(fmt.replace(/<index_no>/g, i));
    }
  
    return result;
  }

  
// END //