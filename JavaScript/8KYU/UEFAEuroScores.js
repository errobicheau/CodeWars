// CodeWars 2023-09-30 //

/* Description: 
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw." */

// SOLUTION //

function uefaEuro2016(teams, scores){
  if (teams.length!== 2 || scores.length!== 2) {
    return "Invalid input. Please provide two teams and their scores."
  }

let winner = scores[0] > scores[1] ? `${teams[0]} won!` : scores[0] < scores[1] ? `${teams[1]} won!` : "teams played draw."
  
return `At match ${teams[0]} - ${teams[1]}, ${winner}`
    
  }

// TEST CASES //

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0])); // "At match Germany - Ukraine, Germany won!"
console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2])); // "At match Belgium - Italy, Italy won!"
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1])); // "At match Portugal - Iceland, teams played draw."
console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 1])); // "At match Germany - Ukraine, Germany won!"
console.log(uefaEuro2016(['Belgium', 'Italy'], [1, 3])); // "At match Belgium - Italy, Italy won!"
console.log(uefaEuro2016(['Portugal', 'Iceland'], [2, 2])); // "At match Portugal - Iceland, teams played draw."
console.log(uefaEuro2016([], [])); // "Invalid input. Please provide two teams and their scores."
console.log(uefaEuro2016(['England & Wales', 'Northern Ireland'], [1, 0])); // "At match England & Wales - Northern Ireland, England & Wales won!"
console.log(uefaEuro2016(['Spain', 'Czech Republic'], [4, 0])); // "At match Spain - Czech Republic, Spain won!"
console.log(uefaEuro2016(['France', 'Romania'], [-2, -2])); // "At match France - Romania, teams played draw."

// END //