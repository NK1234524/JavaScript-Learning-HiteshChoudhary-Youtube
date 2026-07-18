const MyArr = [1,2,3,4];
const MyNewArr = [5,6,7,8];
//This is the way to make the arrays added in the single array
const arrFinal = MyArr.concat(MyNewArr);
console.log(arrFinal);
//Best approach
const arr = [...MyArr ,...MyNewArr];
console.log(arr);
