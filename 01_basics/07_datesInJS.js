let mydate=new Date();
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString()) // date in complete form
console.log(mydate.toLocaleDateString()) //date in slash form
console.log(typeof mydate);

let myCreatedDate = new Date(2024, 5, 27, 5, 3,123);
console.log(myCreatedDate.toLocaleString()); // with time 
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleDateString()) // only date without time

let someDate=new Date("2024-01-15")
// let someDate=new Date("1-11-2024")
console.log(someDate.toDateString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)  // time in milliSeconds
console.log(myCreatedDate.getMonth()+1)

let s = `The Year is now ${myCreatedDate.getFullYear()}`;
console.log(s)


let formattedDate = myCreatedDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true // Use false for 24-hour format
});

console.log(formattedDate);


