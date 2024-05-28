// CodeWars 2024-05-28 //

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

// SOLUTION //

<?php 

function abbrevName($name){

    $nameStr = strtoupper($name);
      
    $letters = explode(' ', $nameStr);
    return $letters[0][0] .  '.' . $letters[1][0];
}

?>

// END //