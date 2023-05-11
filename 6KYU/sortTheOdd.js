// CodeWars 2023-5-11 //

/*
Description

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions. 
*/

// SOLUTION //

function sortArray (array) {
    let oddsArr = []
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddsArr.push(array[i])
        }
    }

    oddsArr.sort(function(a,b) {
        return a - b
    })

    for(let x = 0; x < array.length; x++) {
        if (array[x] % 2 !== 0) {
            array[x] = oddsArr.shift()
        }
    }
    
return array
}

// END //

