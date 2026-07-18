const myArr = [1,2,3,4,5]
//******Interview important*******/
//JS arrays copies always make shallow copies->share the main reference 
//Deep Copy->Do not share the main reference
const heroes =["Shaktiman","Marvels"]
const arr = new Array(1,2,3,4) //It is in the form of objects


//Arrays method

//push

arr.push(5);
console.log(arr)

//pop last value remove

arr.pop()
console.log(arr)
//unshift not used because it increases the time of implementation as it shifts the element by 1 index forward.

arr.unshift(10)
console.log(arr)

console.log(arr.includes(2)); // returns true or flase for the element is present or not.
console.log(arr.indexOf(3));//returns index of the element of the array

const Arr = arr.join();

console.log(Arr);//join binds and convert the Arr into the string 
console.log(arr);


const myArr = arr.slice(1,3)//cuts the particular section of the array but not changes the original array.
//also not include the element at index 3 
const myArr = arr.splice(1,3)//cuts the complete section of the array but changes the original array.
//also includes the element at index 1 & 3.


