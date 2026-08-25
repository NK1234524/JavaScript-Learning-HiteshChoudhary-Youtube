// For loops
for(let i = 1 ; i<=10 ;i++){
    let val = `5 * ${i} = ${5*i}`
    console.log(val);
    
}

let arrays =["Flash","Butter","Food"]
for(let i = 0 ; i<arrays.length ;i++){
    if(arrays[i]=="Flash"){
        console.log("Found flash");
        break;        
    }
    console.log("1 step up");    
}
// While Do While loops
let i = 0;
while(i<arrays.length){
    console.log(arrays[i]); 
    i++;  
}

// High order Array loops

// For of loop

// In JS array can consists of objects
// arr = [ {} , {}, {}, {}]
// So here in for of loop we use to access the objects 

numbers = [1,2,3,4,5]
for(num of numbers){
    console.log(numbers); // here num of Object i.e numbers    
}

