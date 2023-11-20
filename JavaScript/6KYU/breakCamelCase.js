// CodeWars 2023-7-18 //

/* Description: 
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

// SOLUTION w/ REGEX//

function solution(string) {
    return string.split(/(?=[A-Z])/).join(' ');
}

// SOLUTION without REGEX //

function solution(string) {
    string = string.split('').map(el => {
        if(ele === el.toUpperCase()) {
            el = ' ' + el
        }
        return el
    })
    return string.join('')
}

// END //