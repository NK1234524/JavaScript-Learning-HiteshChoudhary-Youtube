// Handle Objects

function handleCart(...obj){ // spread operator
    return obj 
}

console.log(handleCart(200,33,500)); // Makes the array storing all the objects

function HandleCartMy(obj1,obj2,...obj){
    return obj
}
console.log(HandleCartMy(23,12,600,405,500));//In array only [600,405,500] because for spread it is only left.

//Handeling the objects through Function
const AddCart={
    username:"Nishant Kumar",
    location:"New Delhi",
    Price:handleCart(200,100,400,500)
}

function EcartSaved(MyUser){
    console.log(`The username is ${MyUser.username}, Location is ${MyUser.location} and Prices ${MyUser.Price}`);
    
}

console.log(EcartSaved(AddCart));

// Accessing directly the object values through function
console.log(EcartSaved({
    username: 'Xing jiang',
    Location: 'Shanghai',
    product:'Xiomi phone'
}
));


