// CodeWars 2023-10-11 //

/* Description: Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first. */

// SOLUTION //

function declareWinner(fighter1, fighter2, firstAttacker) {
    const turnsFighter1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    const turnsFighter2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  
    if (turnsFighter1 < turnsFighter2) {
      return firstAttacker === fighter1 ? fighter1.name : fighter2.name;
    } else if (turnsFighter2 < turnsFighter1) {
      return firstAttacker === fighter2 ? fighter2.name : fighter1.name;
    } else {
      return firstAttacker;
    }
  }

// TEST CASES //

// Test Case 1: Fighter 1 wins
const fighter1 = { name: "Lew", health: 10, damagePerAttack: 2 };
const fighter2 = { name: "Harry", health: 5, damagePerAttack: 4 };
const firstAttacker = "Lew";

console.log(declareWinner(fighter1, fighter2, firstAttacker)); // Output should be "Lew"

// Test Case 2: Fighter 2 wins
const fighter3 = { name: "Alice", health: 5, damagePerAttack: 10 };
const fighter4 = { name: "Bob", health: 10, damagePerAttack: 2 };
const firstAttacker2 = "Bob";

console.log(declareWinner(fighter3, fighter4, firstAttacker2)); // Output should be "Bob"

// Test Case 3: Both fighters have equal turns
const fighter5 = { name: "Sam", health: 10, damagePerAttack: 2 };
const fighter6 = { name: "Ella", health: 10, damagePerAttack: 2 };
const firstAttacker3 = "Sam";

console.log(declareWinner(fighter5, fighter6, firstAttacker3)); // Output should be "Sam"

// END //