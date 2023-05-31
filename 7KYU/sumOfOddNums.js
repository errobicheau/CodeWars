// CodeWars 2023-5-31 //

/* Description:
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 */

// SOLUTION //

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
  }

// END //