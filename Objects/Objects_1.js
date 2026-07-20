//Singleton is the designing pattern not the way to declare the object 
//Singleton only used to create a object which we can easily share with other 

const obj = new Object();
obj.name = "Nishant Kumar";
obj.rollNo = 34;

console.log(obj);

obj.create();//This is also a way to declare the object in Singleton form.

//Object literals --> is the concpet of creating different objects not going to share the same props.
//Here properties for ex name is stored in the datatype of string.
const newObj = {
    name:"Nishant",
    rollNo:34
}



const newObj1 = {
    name:"Prashant Kumar",
    rollNo:21
}

console.log(newObj,newObj1);

//To Access Objects


