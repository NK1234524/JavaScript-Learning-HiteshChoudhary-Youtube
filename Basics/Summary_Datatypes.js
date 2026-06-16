//Data types =>  Primitive & Non-Primitive types

//Primitive=> BigInt , String ,Number ,Boolean ,null,undefined ,Symbol,

const score = 100
const scorem = 100.3 //not a concept of float
const score1 = Symbol(score);
const score2 = Symbol(score);

console.log(score1===score2);// Symbol creats different for the same value, that's why here === is false. 

const Bigint = 223104954853058

//Non- Primitive=>

//References


//Array , Objects ,functions 


const heroes = ["Spidy","Ninja","Superman"];
let food={
    name:"Samosa",
    cost:"$34"
}

const myfunction = function(){
    console.log("Hello world");    
}

myfunction();

console.log(typeof Bigint);
console.log(typeof myfunction);
console.log(typeof food);
console.log(typeof score1);


