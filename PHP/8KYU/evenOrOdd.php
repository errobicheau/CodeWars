<!-- 
8KYU: Even or Odd

Description: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

Solution:
-->

<?php 

function even_or_odd(int $n): string {
    if ( $n % 2 == 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

/* Test Cases */
echo even_or_odd(4); //Expected result: Even
echo even_or_odd(1); //Expected result: Odd
echo even_or_odd(0); //Expected result: Even
echo even_or_odd(32); //Expected result: Even
echo even_or_odd(28); //Expected result: Even
echo even_or_odd(-4); //Expected result: Even