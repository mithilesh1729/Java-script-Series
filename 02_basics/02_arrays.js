
const arr1=["Mithilesh",89,true,"YES"]
const arr2=['c',"Kunal",'0.99']

const new_arr=arr1.concat(arr2);
console.log(new_arr) //


// spread operator 

const arr3=[...arr1,...arr2,...new_arr]
console.log(arr3); //


// flat nested array 
const temp=[1,2,3,[23,44,55,33,[3456,34546,[45666666]]]];
const real_arr=temp.flat(Infinity)
console.log(real_arr) //


// is_Array
// Array.from
// Array.of


