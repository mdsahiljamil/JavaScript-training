// objects part II (singleTon)

// const tinderUser =new objects() // singleTon object
const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name= "sahil"
tinderUser.isloggedIn = false
 
console.log(tinderUser);

const regularUser ={
    email: "sahil@gmail.com",
    full_name: {
        userFullName:{
            first_name: "sahil",
            last_name: "sahil"
        }
    }
}

console.log(regularUser.email);
console.log(regularUser.full_name.userFullName.first_name);

//* adding two objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4 = {obj1,obj2}// can't give desire objects
// const obj4= Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
console.log(obj4)

//* many objects in an array

const User =[
    {
    id:1,
        email:"xyz1@gmail.com"
    },
    {
    id:2,
        email:"xyz2@gmail.com"
    },
    {
    id:3,
        email:"xyz3@gmail.com"
    },
]
console.log(User[0].email)//[index value]
console.log(tinderUser);
console.log(Object.keys(tinderUser));// key will display in an array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));// op will get array into array

// to known some specific "key value" are present in an object or not
console.log(tinderUser.hasOwnProperty('sahil'))