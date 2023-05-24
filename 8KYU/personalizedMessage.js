// CodeWars 2023-5-19 //

/* Description: Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest' */

// SOLUTION // 

function greet (name, owner) {
    if (name === owner) {
      return 'Hello boss'
      }
      else
      return 'Hello guest' 
}

// REFACTORED SOLUTION //

const greet = (name, owner) => name === owner ? 'Hello boss' : 
'Hello guest'

// END //

