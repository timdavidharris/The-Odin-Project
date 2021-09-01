// From the exercises at the bottom of this webpage:
// https://javascript.info/logical-operators

/* Instructions:
Check the range between
Write an if condition to check that age is between 14 and 90 inclusively.
“Inclusively” means that age can reach the edges 14 or 90.*/
// put in different ages to check the different outcomes
let age = 91;
if (age >= 14 && age <= 90) {
    console.log(`Exercise 1. The age is between 14 and 90. The age is ${age}`);
} else {
    console.log(`Exercise 1. The age is not between 14 and 90. The age is ${age}`);
}

/* Instructions:
Check the range outside
Write an if condition to check that age is NOT between 14 and 90 inclusively.
Create two variants: the first one using NOT !, the second one – without it. */
// put in different ages to check the different outcomes
let age2 = 90;
if (!(age2 >= 14 && age2 <= 90)) {
    console.log(`Exercise 2. The age is not between 14 and 90. The age is ${age2}`);
} else {
    console.log(`Exercise 2. The age is between 14 and 90. The age is ${age2}`);
}