// CodeWars 2023-7-4 //

/* Description:
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1" */

// SOLUTION //

const removeUrlAnchor = url => url.split('#')[0]

// END //