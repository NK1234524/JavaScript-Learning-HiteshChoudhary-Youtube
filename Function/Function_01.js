//Here the function is the keyword , SayMyName is the function name & () declaration of the function
// {} is for defining the function
function SayMyName(){
    console.log('N');
    console.log('I');   
}

// SayMyName is for reference but when () comes it becomes function's execution
SayMyName()


//****** return and console */

function Add(num1,num2){    //num1 and num2 are the parameters here
    return num1+num2  // return is used to store the value and return it 
    //whereas console.log is only used for reading the output 
}

console.log(Add(2,4)); // 2,4 are arguments here

// function implementation

function Logg(username){
    if(!username){
    return //Do not return anything an 'empty return only'
 }
 return `${username} is logged in `
}
console.log(Logg()); // argument if blank then undefined will come in output.
console.log(Logg('Nishant kumar'));

