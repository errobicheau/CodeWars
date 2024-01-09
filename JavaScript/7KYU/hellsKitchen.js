// CodeWars 2024-01-09 //

/* Description: 
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'. */

// SOLUTION //

function gordon(str) {
  
    let modifiedStr = str.replace(/[aeiou]/gi, (match) => {
        return match.toLowerCase() === 'a' ? '@' : '*'
    })

    return modifiedStr.split(' ').map(word => word.toUpperCase() + '!!!!').join(' ')
}

// END //