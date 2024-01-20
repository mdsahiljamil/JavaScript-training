// array -> storing a collection of multiple items of different datatypes under a single variable name
/* 1. js array are resizable and mix datatypes
   2. js array are not associative array
   3. js array copy operations create shallow copies(its change in original copy)
*/ 
//* Array declarations 

const myArr = [0,1,2,3,4,5]
const myheros = ["sahil","jamil","xyz"]

const myArr2 = new Array(0,1,6,5,2,3,4,5)
// console.log(myArr);
// console.log(myArr2[2]);
// console.log(myheros[2]);

// *Array methods
myArr.push(6) // it will add element at last
myArr.pop() // its will remove last element of array
myArr.unshift(9)// add value at first 
myArr.shift()// remove value at first 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); // if the no is not in the array it will always show (-1)

const newArr =myArr.join() // it will convert array into string & inside () will replace by ,

// console.log(myArr);
// console.log(newArr);

//* slice and splice
// slice will print the no without the last range
/*splice will print the no with the last range and when u print Array after 
  using splice it will remove range in array   
*/  
// console.log("A",myArr);
// console.log(myArr.slice(1,3));

// console.log("B", myArr);
// console.log(myArr.splice(1,4));

// console.log("c", myArr);

// *Array part 2

const marvel_heros = ["thor","iron man","spider man"];
const dc_heros = ["batman","superman","splash"];

// marvel_heros.push(dc_heros); // push will add whole 2nd array as a element in 1st array
// console.log(marvel_heros);

const all_heros= marvel_heros.concat(dc_heros); // its add both array and make new array
console.log(all_heros);
console.log(all_heros[5]);

// spread operator (...)
const all_new_heros=[...marvel_heros,...dc_heros];
console.log(all_new_heros);

// flat method
const array1=[1,2,3,[,54,2,6,3],[2,[6,4,3]]]
console.log(array1.flat(Infinity));

// to change diff. datatype into array

console.log(Array.isArray("sahil"));// for checking
console.log(Array.from("sahil")) // it will convert sahil into an array
console.log(Array.from({name:"sahil"}))// can't make it into array

let score1 =100;
let score2 =200;
let score3 =300;
console.log(Array.of(score1,score2,score3)); // op-> [100,200,300]
