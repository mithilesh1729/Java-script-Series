// Javascript Objects and JS web Event or Browser Event   ------> master these topics

/*
 Primitive datatypes (Basic datatypes)
 7 types : Number, String ,Boolean , null ,undefined , BigInt ,Symbol

 decimal ke kuchhh special datatype nhi hai JS me , it is number datatypes only
 null ----> empty
 undefined---> memory is allocated to variable but value is given 
 example: let marksObtained;
 example: let marksObtained=undefined;

*/

/*
 Reference (Non - Primitive)
 Array , Objects ,Functions

 Objects: {}, arrays: [], functions: function() {}
*/

// NOTE:-
/*
 JS is dynamically typed language ---> variables can be declared without giving its datatypes(can assign value to a variable without specifying its type beforehand) 
 and one can store the value of different datatypes in the same variable UNLIKE C,java


let x = 5;         // x is now a number
x = "Hello";    // x is now a string
x = true;       // x is now a boolean

*/

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123"); //to store unique and immutable primitive values
const anotherId = Symbol("123");

console.log(id === anotherId); //false
console.log(id == anotherId); //false
//  although value we have given is same in both id and anotherId

const bigNumber = 333343798239n; //n  end me lagaane se number bigInt

/*
 let number num=3;// Error
 
 when declaring variables using let, we don't need to specify the type of the variable like in other programming languages.
*/

const heroes = ["shaktiman", "naga", "Roshan"]

let myObj = {
  name: "Mithilesh",   //use SEMICOLON to give values inside obejct declaration
  age: 25,
  isStudent: true,
}

let myFunction = function () {
  console.log("Hello world")
}

console.log(typeof heroes); // Array object
console.log(typeof myObj); // obejct
console.log(typeof myFunction); //function object
