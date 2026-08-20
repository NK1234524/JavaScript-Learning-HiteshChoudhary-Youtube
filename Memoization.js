//Implementing Memoization in JavaScript
//Memoization is an optimization technique that can be used to reduce
//time-consuming calculations by saving previous input to something called cache and returning the result from it.


// const calc = (num)=>{
//     let sum=0;
//     for(let i = 0 ; i<=num ; i++){
//      sum+=i;    
//     }
//     return sum;
// }
// console.time();

// console.log(calc(5));


// console.timeEnd(); // it is taking a sort of time to implement the fn

// // Now here comes Memoization to make the fn implementation more optimized.

// const Memoization=(fun)=>{
//     let cache ={}
//     return function(...args){
//         let n=args[0]
//         if(n in cache){
//             console.log("cache");
//             return cache[n];            
//         }
//         else{
//             console.log("Calculating 1st time");
//             let result = fun(n)
//             cache[n] = result
//             return result            
//         }
//     }
// }

// console.time();
// const effi = Memoization(calc);
// console.log(effi(5));
// console.timeEnd()

//

const multiply = (num) => {
    let value = 0;

    for (let i = 0; i <= num; i++) {
        value += i;
    }

    return value;
}

const Memo = (fn) => {
    let cache = {};

    return function (...args) {
        let key = args[0];

        if (key in cache) {
            return cache[key];
        } else {
            let result = fn(...args);
            cache[key] = result;
            return result;
        }
    }
}
console.time()
console.log(multiply(5))
console.timeEnd()
console.time();
let ans = Memo(multiply);
console.log(ans(5));
//console.log(ans(5)); // comes from cache

console.timeEnd();