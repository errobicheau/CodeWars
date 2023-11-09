// CodeWars 2023-11-09 //

/* Description: Add an item to the list:

AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)

In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.

P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work, even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller) */

// SOLUTION //

function addExtra( listOfNumbers ){
    let newList = []
    for( let i = 0; i <= listOfNumbers.length-1; i++ ) {
      newList.push(listOfNumbers[i])
    }
    newList.push('test')
    return newList
}

// TEST CASES //

console.log(addExtra([1,2,3])) //expected return: 4
console.log(addExtra(1,2)) //expected return: 3
console.log(addExtra([])) //expected return: 1
console.log(addExtra([1,2,3,4,5,6,7])) //expected return: 8

// END //