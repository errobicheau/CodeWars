// CodeWars 2023-06-22 //

/* Description: There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski" */

// SOLUTION //

function correctPolishLetters(string) {
    const replacedString = string.split('').map(char => {
        switch (char) {
          case 'ą':
            return 'a';
          case 'ć':
            return 'c';
          case 'ę':
            return 'e';
          case 'ł':
            return 'l';
          case 'ń':
            return 'n';
          case 'ó':
            return 'o';
          case 'ś':
            return 's';
          case 'ź':
            return 'z';
          case 'ż':
            return 'z';
          default:
            return char;
        }
      })
      .join('');
  
    return replacedString;
  }

// END //