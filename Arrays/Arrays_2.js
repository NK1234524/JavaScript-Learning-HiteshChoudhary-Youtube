const MyArr = [1,2,3,4];
const MyNewArr = [5,6,7,8];
//This is the way to make the arrays added in the single array
const arrFinal = MyArr.concat(MyNewArr);
console.log(arrFinal);
//Best approach
const arr = [...MyArr ,...MyNewArr];
console.log(arr);


//If an array with the nested arrays are present 

const Arrays = [1,2,3,4,5,[6,7,8],[9,10,11,[12,13,14]]];
console.log(Arrays.flat(Infinity));//flat helps to make the arrays with nested one into the complete element consisting array

console.log(Array.isArray(Arrays));//isArray to check that the given array is the array or not 
console.log(Array.from("Nishant"));//from method helps to make the array.

console.log(Array.from({name:"Nishant"}));//****Interview imp q****/
// It will return an blank array

const I =1;
const II =2;
const III =3;

console.log(Array.of(I,II,III)); // of method is use to join different elements into an array.



