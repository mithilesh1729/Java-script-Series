console.log(2 >= 2);
console.log(1 == 1);
console.log(0 < 1);
console.log(0 <= 1);

// below are some problems

console.log("2" >= 2); //true
console.log("02" >= 2); //true
console.log("2" == 2); //true

/*  "2" >= 2 and "02" >= 2 both evaluate to true because JavaScript converts the strings to numbers 
    before performing the comparison.
    it tries to convert values to a common type (in this case, numbers) to perform the comparison.
*/

console.log(null > 0); //false  0 > 0
console.log(null == 0); //false
console.log(null >= 0); //true  0 >= 0

/*  The reason is that eqaulity check == and comparisons < >= <= > work diffrently in JS
Comparison convert null to number treating as 0
*/

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false\

// STRICT CHECK  ===
//  ----> check the value along with its datatypes as well

console.log("2" === 2); //false  ---> datatypes is different


//Note:-
// SO AVOID THESE TYPES OF CHECKS / COMPARSIONS
