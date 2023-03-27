/*
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/


// SOLUTION //

const humanYearsCatYearsDogYears = function(age) {
if (age == 1) return [1, 15, 15]
if (age == 2) return [2, 24, 24]
if (age > 2) return [age, (age-2) * 4 + 24, (age-2) * 5 + 24]
}

// END //
