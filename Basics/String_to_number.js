
//final value is different
console.log(1+"2")
console.log("1"+2)
console.log("1"+2+2)


//Type conversion (Imp) Operator precendence
console.log(+true) //remains true.
console.log(+"") // false=>"" + 1 so the value will be true.

let greaterNumber =100;
console.log(++greaterNumber);//pre increment => greaterNumber increment by 1
console.log(greaterNumber++);//post increment => greaterNumber not increment it is just a value.


let newNum1 = greaterNumber++; //But here greaterNumber =102 (post increment) & graterNumber+1
let newNum2 = ++newNum1;//here increament in numNum1 & newNum2 
console.log(newNum1)
console.log(newNum2)



