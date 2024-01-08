const accountId = 125436
let accountEmail = "mdsahil@gmail.com"
var accountPassword ="12345"
accountCity = "Ranchi" /* without declaring any variable we can also assign a memory space
                        but this is not a good practice */  
let accountState;

// accountId = 2 // const does not allowed to change
accountEmail = "xyz@gmail.com"
accountPassword = "959467"
accountCity= "kolkata"

console.log(accountId);
console.table([accountId,accountPassword,accountEmail,accountCity,accountState]);

/* Note :-
prefer not to use var because of issue in block and functional scope 
Allows prefer "let"
*/