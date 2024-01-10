// **this below comparison are basic**
/*
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1); */

// console.log("2">1); // *the complier will automatically convert string into number
// console.log("03">"6")

//  ***Always avoid this type of comparison***
//their is a diff. b/w equality check and comparison 
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); //true
// and in the case of undefined , it show false in everyone 

// **("==="strick comparison-its compare inputs as well as their "datatypes")
// console.log("2"===0); // => false

// -------------------xxxxxxx--------------------------xxxxx--------------------------
// *stack (primitive), heap (Non-primitive) memory

let Name = "md sahil jamil"
let otherName = Name

otherName = "unknown_person"

console.log(Name)
console.log(otherName)
console.log("----------------------------")

let user1 = {
    Gmail:"sahil@gmail.com",
    age : 20
}
let user2 = user1

user2.Gmail = "xyz@gmail.com"

console.log(user1.Gmail);
console.log(user1.Gmail);