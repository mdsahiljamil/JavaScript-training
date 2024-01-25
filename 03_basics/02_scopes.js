//* global and local scope
// var c= 300
let a =1000//global scope- A variable declared outside a function, becomes GLOBAL.

if(true){ // local scope -Variables defined inside a function are not accessible (visible) from outside the function.but (var can be access)
          
   let a =10
   const b =20
   var c =30 // c= 300
   // console.log("Inner",a)
}

// console.log(a);
// console.log(b);
// console.log(c);// this will get print
// console.log(c); // op-> 30

//* nested scope

function one(){
   const username ="sahil"

   function two(){
        const website = " youtube"
      //   console.log(username);
   }
   // console.log(website); // this will not run because it is outside the scope 
   two()// calling a function(two)
}
one()// calling a function(one)

if (true){
   const username = "sahil"
   if(username === "sahil"){
      const website = " youtube";
      // console.log(username + website);
   }
   // console.log(website);// show error "out of scope"
}
// console.log(username);// show error "out of scope"

//*-------------xxxx-------------------
// [Note]- in js variables are very strong that can hold anything(function,json value, etc)
// these are 2 technic of function declaration

addOne(5) // this will execute
function addOne(num){
    return num + 1
}

addTwo(5) // this will not execute bcz we holding a function into an variable
const addTwo = function(num){
     return num + 2
}