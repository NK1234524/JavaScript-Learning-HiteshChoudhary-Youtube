const numbers = [1,2,3,4,5];
numbers.forEach(element => {
   return element;
});
// In forEach is going to return nothing/undefined.
// Filter is used at the place of forEach loop when we need to return something.
const newnum = numbers.filter((num)=>num>4)//implicite is valid till scope not comes in role
const newnum1 = numbers.filter((num)=>{
    return num>4;// With scope we need return value.
})
console.log(newnum1);


// Using Map function
// It is a callback function

const map_num = numbers.map((num)=> num+10);// Here map fn have automatic return
// but with scope it will again need to be have return
console.log(map_num);
const map_n = numbers.map((num)=>{return num+10});
console.log(map_n)

// chaining 
const chain = numbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(chain)

