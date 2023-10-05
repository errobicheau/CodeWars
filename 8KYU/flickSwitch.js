// CodeWars 2023-10-05 // 

/* Description: Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
Notes
"flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself. */

// SOLUTION // 

function flickSwitch(arr){
    const result = []
    let switchFlag = true
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] == 'flick') {
        switchFlag = !switchFlag
      }
      result.push(switchFlag)
    }
    return result
  }

// END //