// CodeWars 2023-5-13 //

/* Description: 
*/

// SOLUTION //

var sing = function () {
    // return the lyrics as a string ...
    var song = [];
    for (var i = 99; i > 1; i--) {
      song.push(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.');
      if (i-1==1)
        song.push('Take one down and pass it around, ' + (i-1) + ' bottle of beer on the wall.');
      else
        song.push('Take one down and pass it around, ' + (i-1) + ' bottles of beer on the wall.');
    };
    song.push('1 bottle of beer on the wall, 1 bottle of beer.');
    song.push('Take one down and pass it around, no more bottles of beer on the wall.');
    song.push('No more bottles of beer on the wall, no more bottles of beer.');
    song.push('Go to the store and buy some more, 99 bottles of beer on the wall.');
    return song;
  };

// END //