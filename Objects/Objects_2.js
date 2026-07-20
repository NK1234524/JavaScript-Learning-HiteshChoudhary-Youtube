
//Now using symbols in OOPS

const mySymb = Symbol("Key1");


const UserID = {
    name:"Nishant Kumar",
    UserName: "NK21",
    EmailID: "Nishant201kashyap@gmail.com",
    "Full Name":"Nishant Kumar jha",
    [mySymb]:"mySymb1"//best way to declare a Symbol
}

console.log(UserID["name"]);// Best way to use the properties of the objects defined.
console.log(UserID["Full Name"]);// Best way to use the properties of the objects defined.

//console.log(UserID["mySymb"]);//Here it is behaving like a string 
//****Output will be same in both of them**********/
console.log(UserID[mySymb]);//Here it is behaving like a symbol


//Object freeze 
//Object.freeze(UserID); 
UserID.EmailID = "Nishant@Conti.in";
//**** New Email Id is not updated *******//
console.log(UserID);

//function for Objects

UserID.greeting = function(){
    console.log(`Good morning , ${this["Full Name"]}`);//This refers to the object & mention our prop.    
}


console.log(UserID.greeting);//***provides us a reference***/
console.log(UserID.greeting());//**provides us a function output*****/



