// Immediately Invoked Function Expressions (IIFE)

// Why IIFE and what is IIFE?
// To immediately invoke the Fn and also IIFE is special technique to prevent the global scope variable polln

(function chai(){
    console.log("DB CONNECTED");    
})();
// So here without of fn use it will be invoked
// Also 1st () -> for Fn declaration 
// 2nd () -> for invoking Fn
// It is named IIFE
// Also if we are using IIFE again then we must make sure to make it end by ;


(()=>{
    console.log("DB Connected 2nd stage");
})() // So Arrow fn i am using to invoke
// When arrow fn is used then it is called non-named iife