// CodeWars 2023-5-4 //

/* 
Enjoying your holiday, you head out on a scuba diving trip!

Disaster!! The boat has caught fire!!

You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

Go to work!
*/

// ORIGINAL SOLUTION //

/*
function fireFight(s){
    return s.replaceAll('Fire','~~')
}
*/

// REFACTORED SOLUTION //

const fireFight = s => s.replaceAll('Fire','~~')

// END //