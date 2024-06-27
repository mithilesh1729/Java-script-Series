//arrays

let myArr=[0,1,2,3,4,5,"hitesh",true,1.001]   // may contain mixed datatype

// myArr[3]=111  

// shallow copy  ---->share the same references
// when you change either the source or the copy, you may also cause the other object to change too.
// console.log(myArr)

const myArr1=new Array(25,26,78,56)
myArr1[3]=4579
// console.log(myArr1);

// array methods 

// myArr.push(333)
// myArr.pop()
// myArr.pop()
// console.log(myArr);

// myArr.unshift(99)   // add given elem to the beginning of array
// myArr.shift()   // remove the first elem from beginning of array
// console.log(myArr);


// console.log(myArr.includes(88))
// console.log(myArr.indexOf("hitesh"))


// const newArr=myArr.join()
// console.log(newArr) // converted array elem to string with comma separated
// console.log(typeof newArr)  // String type 

console.log("A" ,myArr)
const myNewArr1=myArr.slice(1,5)  // do not change the original array 
console.log(myArr)

const myNewArr2=myArr.splice(1,5)  // changes the original array
console.log(myArr)


// slice----> only copy the part of array as given the index
// splice ---> remove the element from the array as given the index
// hence splice changes/modify the original array



