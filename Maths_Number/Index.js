/*******************Numbers*******************/

const number  = 34;
console.log(number);

const num = new Number(34);
console.log(num);

console.log(num.toString().length);
console.log(num.toFixed(2)); // important for E -commerce websites where cost is mentioned.

const number1 = 344.58;
console.log(number1.toPrecision(1));//Very imp for interviews.Run the command only to revise. 

const hundreds  =100000;//'en-IN' is the Indian number System.
console.log(hundreds.toLocaleString('en-IN'));//provide the representation of value with Number system.

Number.MIN_VALUE;//Maximum number 
Number.MAX_VALUE;//Minimum number

/**Maths***/

Math.abs(value);
Math.round(4.3);    
Math.ceil();
Math.floor();


console.log(Math.random());//Generated randomly the number.



