let value = 34

console.log(typeof(value));
console.log(typeof value);


//Here is an issue in JS in typeconversion.
let value1 = "34aa";
let value2 = Number(value1);
console.log(typeof value2);
console.log(value2);
//"33"=>33
//"33aa"=>NaN
//true=>1 and false=>0

let ISvalue = "";
let news = Boolean(ISvalue);
console.log(news);

//""=>false
//1=>true & 0=>false
//"nishant"=>true

let number = 34;
let stringNumber =String(number);
console.log(typeof stringNumber);
console.log(stringNumber);