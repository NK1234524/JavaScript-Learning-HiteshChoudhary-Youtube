const account = {
    username : "Nishant Kumar",
    price: 34,

    welcome:function() {
        console.log(`${account.username} Welcome to the account`);      
        console.log(this); //'this' is the keyword is used only for the object context.              
    }
   
}

account.welcome()
account.username = "Niki"
account.welcome()
console.log(this); // that's why here the output is {} because no object is having context here.

//*********New Case******/
function name(){
    console.log(this)
    // give all the context regarding the node enviroment now.
    //But it was not showing anything earlier without fn.{}
}
name()

//***Imp thing****/
function Name_Mine(){
    let mine = "Nishant Kumar"
    console.log(this.mine);
    
}

Name_Mine() // it is showing undefined as an output 
//because only works for objects.

//******Arrow functions****

const New_fn = ()=>{
    let name = "Nishant Kumar"
    console.log(this) 
}
New_fn() // behaves like without function console.log(this) above

// implicite return 

const add_Two = (num1,num2)=>{
    return num1+num2 // explicite return
}

console.log(add_Two(2,3));

// Now we will convert it into implicite 

const add_two = (num1,num2) => num1+num2 // this is implicite return

// but to return the object through implicitely 

const add = (num1,num2)=>({username:"Nk"}) // here to see {} the object in output we need ({}) is important. 
console.log(add(3,4));

