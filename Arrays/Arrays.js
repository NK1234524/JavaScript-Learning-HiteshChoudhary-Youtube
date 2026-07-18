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

//
