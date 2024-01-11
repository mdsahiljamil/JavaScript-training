const name ="sahil"
const repoCount = 50

// console.log(name + repoCount + " anyThings"); // this is old method

//* string interpolations ( New Method)
console.log(`hello my name is ${name} & my repo count is ${repoCount}`)

const gameName = new String("sahil jamil")

// console.log(gameName); // -- [String: 'sahiljamil']
// console.log(gameName[2]); // -- h
// console.log(gameName.__proto__); // -- {}
// console.log(gameName.length); // -- 10
// console.log(gameName.toUpperCase()); // --SAHILJAMIL
// console.log(gameName.charAt(5)); // --j
// console.log(gameName.indexOf('j')); // -- 5

//*subString
const newString = gameName.substring(0,6)
console.log(newString);
//*slicing and neg slicing 
const anotherString = gameName.slice(-8,3)
console.log(anotherString);
// *to remove unwanted space 
const newString1 = "   sahil      "
console.log(newString1);
console.log(newString1.trim());
//*to replace
const url = "https://sahil.com/sahil%20jamil"
console.log(url.replace("%20","-"))
console.log(url.includes("sahil")) //*to check something is present or not
//* to slipt, An string into array
console.log(gameName.split(' '))