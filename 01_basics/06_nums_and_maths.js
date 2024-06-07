const score = 100;
// console.log(score);

let balance = new Number(200.2278);
// console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3)); // decimal ke baad se consider karta hai, kitne digit tak precision lena hai

console.log(balance.toPrecision(1)); // left side starting se consider karta hai and return String type
// toPrecision exponential/scientific form me bhi dikhata hai ------>BECareful

let hundreds = 1000000;
// in american standard
console.log(hundreds.toLocaleString()); // separate using the comma..so that No read karne me easy ho

// console.log(hundreds.toLocaleString("en-IN")); // Indian standard me reading karna

// ++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-789));
console.log(Math.round(45.898)); // 46
console.log(Math.floor(45.8)); // 45
console.log(Math.ceil(45.8)); // 46
console.log(Math.min(3, 4, 8, 9)); // minimum value=3
console.log(Math.max(3, 4, 8, 9)); // minimum value=9

console.log(Math.random()); // value betyween [0-1) *******
console.log(Math.random() * 10); // value between [0-9].....minimum value 0 aa skti hai
console.log((Math.random() * 10) + 1); // value between [1-9]....minimum value 1 aa skti hai

const min = 60;
const max = 80;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
//  Since Math.random() returns a value between 0 and 1, multiplying it by 21 (in this example) will give a value between 0 (inclusive) and 21 (exclusive).

// and shift the range from 0--->min  and 21-->min +21
//                           60----------------80
