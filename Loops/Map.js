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


