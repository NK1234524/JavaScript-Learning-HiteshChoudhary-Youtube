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
    console.log(num); // here num of Object i.e numbers    
}

word = "Hll"
for(str of word){
    console.log(str);
    
}

// Map
const map = new Map()
map.set("IN",'India');
map.set("Pak",'Pakistan');
map.set("Ban",'Bangladesh');
map.set("Ban",'Bangladesh');

console.log(map); // unique values always

// How to access data in for of loop of Map

for(const [ key,value] of map){
    
    console.log(`${key} => ${value}`);    
  
}

// For of loop can not be used for Objects

//So for that we will use for in loop

// It does not mean forin loop can only be used for objects it can be used for Other DS also

myObj = {
    'py':'python',
    'rb':'Ruby'
}

for (const key in myObj) {
       console.log(myObj);       
}