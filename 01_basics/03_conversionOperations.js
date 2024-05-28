let score ="33abc"
let isLoggedIn=true

// console.log(typeof score)

let convertedScore=Number(score)

// console.log(convertedScore)
// console.log(typeof convertedScore)

// "33"--->33
// "33abc"--->NaN   but typeof convertedScore is --->number 
// true--->1 false-->0
 
let someNumber=1
// console.log(Boolean(someNumber))

let someString=""
// console.log(Boolean(someString))

let someString2="Mithilesh"
console.log(Boolean(someString2))

// ""---->false
// "Mithilesh" ----> true

// for conversion there are some methods starting with Capital Symbol
// To convert into number datatype ---> Number()
// To conert into string datatype ---> String()
//  To convert into boolean datatype ---> Boolean()  


// ******************** Operations *********************
let str1="Mithilesh"
let str2=" Kumar"
let str3= str1+str2
// console.log(str3)

// console.log(1 + "2")
// console.log("1" + 2)
// console.log("1"+ 2 + 2)
// console.log(1 + 2 + "2") //  KHaTAAAAARA


console.log(+true); // 1
// console.log(true+); // Error

let gameCounter=100
++gameCounter
gameCounter++
console.log(gameCounter);





