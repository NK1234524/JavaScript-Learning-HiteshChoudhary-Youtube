//Control flow 

if(true){
    // Every code inside the scope of true condition will run
}

if(false){
    //Every code inside the scope of false condition will not run
}


if(2=='2'){
    console.log("Executed");    
}
// here 2=='2' is not equal because here '2' is in inverted commas and 2 is number.
// But output is True
// Here True and False these both are conditions over which it is running.

let number= 23;
if(number>30){
    console.log("Greater than 30");
}
else{
    console.log("Not greater than 30");    
}

// Accessing values under control flow:
let play = "Music";
score = 34
if(score>20){
   // let playing = "football";// It is having only local scope 
   var playing = "Football" // gives no restriction it don't have any scope preference.
    console.log(`Can play : ${play}`);    
}
console.log(playing);// Here global scope will come in the playing as var is used.


// Implicite way to write the fn

const value = 44;
if(value>40) console.log(`Yes it is greater then ${value}`),console.log("Not much greater");

// 


