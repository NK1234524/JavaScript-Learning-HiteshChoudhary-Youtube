let name = "Nishant"
let marks = 90;

//String concatination
console.log(name+" "+marks);

//String interpolation
console.log(`${name} scored ${marks} marks`)

const getName = new String("Nishant");
console.log(getName.__proto__);// proto represents prototype i.e of which type our data is here it is object.
const n = getName.toUpperCase;
console.log(n);//Original value will remain same heap & stacks concept.

const getName1 = "Nishant";
const newStr = getName1.substring(0,5);//always start from 0 evenyou start with -ve value.
const newStr1 = getName1.slice(-1, 4);//can take -ve value also.
console.log(newStr);
console.log(newStr1);

const newStringOne = "    Nishant    ";

console.log(newStringOne);
console.log(newStringOne.trim()); // Will remove the extra space in the string.

url = "https://Nishant.com/Nishant%20kumar"

console.log(url.replace("%20","-"));
console.log(url.includes("Nishant"));

//To convert the string ino the array

const str = "Nishant-kumar";
console.log(str.split("-"));






