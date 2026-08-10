// In this scope examples we will see the feature in nested loops or functions
// Here inner loop , fn , condition can take the outer fn, condition, loop variables data but not vice-versa


// 1st example

function One(){
    console.log('I am one');
    function Two(){
       let website = 'Google'
       let Username = 'Nk21Kumar' 
    }
    //console.log(website+Username)//Here scope issue is raised as the website and Username both are under Two  
}
One()


//2nd example
if(true){
    const username ="nk"
    if(username==='nK'){
        const website='Google'
        console.log(username);        
    }
    // console.log(website);
}

//3rd example
/****** Closures intro ******/

addOne(4) // But here we can access it before the initialization 
function addOne(num){ // This is the function without any expression
    return num+1;
}



const calc = function (num){ // This is also a function but in form of expression
    return num+1
}

calc(4)

/*****Here the actual difference between expression and normal fn representation is present *******/
Calc1(4) //We cannot access before initilization
const Calc1 = function(num){
    return num+1
}

// This is the concept of the Closures