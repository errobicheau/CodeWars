// CodeWars 2023-6-5 //

/* Description: 
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0). */

// SOLUTION //

function insertDash(num) {
    num = num.toString().split('')
   
   for(let i = 0; i < num.length; i++){
     if(num[i] % 2 > 0 && num[i+1] % 2 > 0) {
       num[i] = num[i] + '-'
     }
   }
     return num.join('')
 }

// END //