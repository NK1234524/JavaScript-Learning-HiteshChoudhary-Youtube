const Tinder = {}//Singleton object
const TinderUser = new Object(); // Non Singleton object


//Nested objects*** */

const UserRegular = {
    name:"Nishant Kumar",
    designation:{
        Location:"New Delhi",
        full_Name:{
            FullName : "Nishant Kumar Jha"
        }
    }
}

console.log(UserRegular.designation.Location);
console.log(UserRegular.designation.full_Name.FullName);//It is the way of accessing the nested objects

//********** Interview Imp ********
const obj1 = {1:"a",2:"b"};
const obj2 = {1:"a",2:"b"};
const obj3 = {1:"a",2:"b"};

//spread
const obj4 ={...obj1,...obj2,...obj3}
console.log(obj4);

//To join the objects --> here {} is the object structure in which the different objects stored
//without {} it will work similarly but thorugh {} all the objects are stored.
const obj5 =Object.assign({},obj1,obj2,obj3);
console.log(obj5);

//How the data actually comes from the Database
//It comes in the form of an array
const UserInfo=[
    {
        UserInfo1:{
            Username:"Prashant kumar",
            ID:"PK23"
        }
,
        Location:{
            Locate : "New Delhi"
        }
    }
]

Object.keys(UserInfo);
Object.values(UserInfo);
console.log(UserRegular.designation.hasOwnProperty("Location")); //To check the property really exists or not 

//Destructuring an object

const {name:nameof}=UserRegular;
console.log(nameof);//so to access the prop of the object specifically we will store it in {}



