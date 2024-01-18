//  Dates --1st date jan 1 1970

let myDate = new Date()
// console.log(myDate);// date is an object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

let myCreatedDate= new Date(2024,0,18,6,3) // in js no. of months start with 0 // 6,3 is use to denote time
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
let myCreatedDate_2= new Date("01-14-2024") // mm-dd-yyyy
// console.log(myCreatedDate_2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // get time in millisecond from 1/1/1970
// console.log(myCreatedDate.getTime()); 
console.log(Date.now()/1000)
console.log(Math.round(Date.now()/1000));// round() will remove the decimal point

let newDate = new Date()
console.log (newDate);
console.log (newDate.getMonth()+1);
console.log (newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday: "short",}// op-> fri 
));
