const name = "Mithilesh"  // in backened , here also string is invoked as Object only
const repoCount = 100

// console.log(name+ repoCount+ " value")   //Old way to do

console.log(`my name is ${name} and my repoCount is  ${repoCount} values`)

const gameName = new String("hitesh-hhc-hh")   // string as direct Object invoked
// 0: "h"
// 1: "i"
// 2: "t"
// 3 :"e"
// As key-value pair,....String is NOT an array

// console.log(gameName[0])

// console.log(gameName.length)
// console.log(gameName.toUpperCase())

// does NOT change the original value of String because String is primitive type Hence memory allocated in Stack 
// console.log(gameName)

console.log(gameName.__proto__)  //{}  tells , gameName is Object type

console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))


console.log(gameName.substring(0, 4))  // can take -ve argument 

console.log(name.slice(-8, 4)) // can take -ve argument   // end index is excluded

// If negative, it is treated as str.length + -veIndex.
//here, name.length+ -veIndex  == 9 +(-8)==1
// Hence from   1----4

const newString="     hitesh   "
console.log(newString.trim())  

const url="https://mithilesh.com/mithilesh%20kumar"

console.log(url.replace('%20','-'))

console.log(url.includes('mithilesh.com'))  // return Boolean value 



