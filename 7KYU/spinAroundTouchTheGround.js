// CodeWars 2023-10-21 //

/* Description: 
Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

Worked Example
["right", "right", "right", "right", "left", "right"] ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)
Examples
["left", "right", "left", "right"] ➞ 0

["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

["left", "left", "left", "left"] ➞ 1
Notes
Return a positive number.
All tests will only include the words "right" and "left". */

// SOLUTION //

function spinAround(turns) {
    if (turns.length === 0 || turns.length < 3) {
      return 0
    }
  
    let rotation = 0
  
    for (let i = 0; i < turns.length; i++) {
      if (turns[i] === 'left') {
        rotation += 90
      } else if (turns[i] === 'right') {
        rotation -= 90
      }
    }
  
      return Math.floor(Math.abs(rotation/360))
  }
  

// END //