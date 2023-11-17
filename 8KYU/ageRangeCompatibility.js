// CodeWars 2023-11-17 //

/* Description: 
DESCRIPTION:
Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.

Min = Age / 2 + 7; Max = (Age - 7)2

minimum age <= your age <= maximum age

Task
Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

This equation doesn't work when the age <= 14, so use this equation instead:

min = age - 0.10 * age
max = age + 0.10 * age
You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]

##Examples:

age = 27   =>   20-40
age = 5    =>   4-5
age = 17   =>   15-20
*/

// SOLUTION //

// function datingRange(age){
//     if( age > 14 ) {
      
//      let min = Math.floor((age/2) + 7)
//      let max = Math.floor((age-7) * 2)
//      return `${min}-${max}`
     
//     } else {
      
//     let min = Math.floor(age - 0.10 * age)
//     let max = Math.floor(age + 0.10 * age)
//     return `${min}-${max}`
    
//     }
// }

// REFACTORED SOLUTION //

function datingRange(age){
    return `${min(age)}-${max(age)}`;
    
    function min(age) {
      return Math.floor(age > 14 ? (age / 2) + 7 : age - 0.10 * age);
    }
    
    function max(age) {
      return Math.floor(age > 14 ? (age - 7) * 2 : age + 0.10 * age);
    }
  }

// TEST CASES //

console.log(datingRange(23)) //expected return: '18-32'
console.log(datingRange(40)) //expected return: '27-66'
console.log(datingRange(15)) //expected return: '14-16'
console.log(datingRange(35)) //expected return: '24-56'

// END //