const userEmail = "Nishant"
if(userEmail){ // Here it is showing an output without any logic comparator.
    console.log("Existing");    
}//Because here it is checking, is the given variable actually exisitng in the code or not.
else{
    console.log("Not existing");    
}

//Falsey values

//"",NaN,undefined,null,BigInt 0n,false , 0, -0 


const userName = [];
if(userName.length===0){
    console.log("Array is empty");    
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty here");    
}

// Nullish Coalescing operator (??): null undefined
let val1;
val1=30?? 34;
val2 = null??32;
val3 = undefined??45;
val4 = null??undefined;
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
// This operator is the only used for making the values extraction from DB
// If DB is giving 2 values then we have to select any one of them.