var a =10 // It is in Global scope
let b =20
const c =50

if(true){
    var a =200//It is currently in local scope
}
console.log(a); // but the var issue is it will print 200 due to scope issue.
// That's why it is not used in the programming 

//This will not takes place with let and const

