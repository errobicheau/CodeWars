// CodeWars 2023-10-26 //

/* Description: 
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return [] */

// SOLUTION //

const solution = (nums) => nums == null ? [] : nums.sort((a, b) => a - b)

// TEST CASES // 

console.log(solution([1, 2, 10, 50, 5])) // should return [1, 2, 5, 10, 50]
console.log(solution(null)) // should return []
console.log(solution([])) // should return []
console.log(solution([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])) // should return [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// END //