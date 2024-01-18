const score = 400
// console.log(score); --> 400

// const balance = new Number(100)// Number keyword is use to declare its a number
// console.log(balance); --> [Number: 100]
// console.log(typeof(balance)); => object

// console.log(balance.toString());
// console.log(typeof(balance.toString())); // => string
// console.log(balance.toFixed(2));

const No = 123.5562
// console.log(No.toPrecision(3)); // => 124

const hundreds = 1000000
// console.log(hundreds.toLocaleString());

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);// there are more method but these are are mostly use in 

// *------------------ Maths-------------------------------

console.log(Math); // -> Math is an object which contain many function
// console.log(Math.abs(-6));// -> absolute value, // 6
// console.log(Math.round(4.3)); // 4
// console.log(Math.ceil(4.3)); //5
// console.log(Math.floor(4.3)); //4
// console.log(Math.sqrt(4)); //2
// console.log(Math.pow(2,5)); // 32
// console.log(Math.max(4,6,4,23,58,1,552,3)); //552
// console.log(Math.min(4,6,4,23,58,1,552,3)); //1

console.log(Math.random());
console.log((Math.random()*10) + 1); // by +1 it is guarantee that no will not come with '0'
console.log(Math.floor(Math.random()*10) + 1); 
console.log("-----------");

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// man - min is use to replace the "*10" and + min is use to get the no greater then 10