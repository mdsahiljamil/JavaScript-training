// singleton -oject create with constructor
//           -oject create with literals doesn't make singleton 

// object literals

const mySym = Symbol("mykey") // declare a symbol

const JsUser ={
    first_name:"sahil",
    "last name":"jamil",
    age:18,
    [mySym]: "Symbol as key", // symbol as a key
    location:"Ranchi",
    email:"sahil2024@gmail.com"
}
// console.log(JsUser.first_name);
// console.log(JsUser["first_name"]);
// console.log(JsUser["last name"]);
// console.log(JsUser["last name"]);
// console.log(JsUser.age);
// console.log(JsUser[mySym]); // op of symbol
// console.log(JsUser);

JsUser.email = "sahil@chatgpt.com"
JsUser.email = "sahil@chatgpt.com"
// console.log(JsUser);
// Object.freeze(JsUser);// after using freeze function we cannot change the value
JsUser.email = "sahil@google.com"
// console.log(JsUser);

// adding a functions 

JsUser.greeting = function(){
    console.log("hello js user")
}
JsUser.greeting2 = function(){
    console.log(`hello js user,${this.first_name}`)
}
console.log(JsUser.greeting); // op --[Function (anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greeting2());



