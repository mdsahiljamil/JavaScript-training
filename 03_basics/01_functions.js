//* function

function sayMyName(){
    console.log("s")
    console.log("a")
    console.log("h")
    console.log("i")
    console.log("l")
}

// sayMyName // it is only reference
// sayMyName() // it is use to execute
/* 
 function addTwoNumbers(number1,number2){ // () parameter

    console.log(number1 + number2);
 }

 addTwoNumbers(3,6)// arguments
 */
//* another method for adding 2 no.
function addTwoNumbers(number1,number2){

    let result = number1 + number2
    return result;
    // return number1 + number2 // this will also works
}
const result=addTwoNumbers(3,6)
// console.log("Result",result); 

function loginUserMessage(username){ // (username = "xyz") if nothing is passed then xyz will execute
    if(username === undefined){ // or we can write (!username)
        console.log("please enter a username");
        return
    }
      return `${username} just logged in `
}
// loginUserMessage("sahil")// it will not work
// console.log(loginUserMessage())
// console.log(loginUserMessage("sahil"))

function calculateCartPrice(...num1){ // ... is rest operator
  return num1
}
// console.log(calculateCartPrice(200,500,300,600))

// --------------**************-------------------
//* calling object using function
const User ={
    username:"sahil",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
}
// handleObject(User)
handleObject({
    username:"hacker",
    price: 359
})

//* calling array using function

const newArray =[100,600,500,840]

function returnArrayValue(getArray){
    return getArray[2]
}
// console.log(returnArrayValue(newArray))
console.log(returnArrayValue([100,600,500,840]))
