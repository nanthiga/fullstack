// Arrow function
const arr = [1,2,3,4,5];
// arr.find((value) =>{console.log(value)})
let above = arr.find(value => value>2)
console.log(above);
let above1 = arr.filter(value => value>2)
console.log(above1);
let ans = arr.reduce((acc,cur)=>acc+cur,0) // acc->accumulator cur->current value
console.log(ans)
let ans1 = arr.some(val => val<0) // one element is true it return true
console.log(ans1);
let ans2 = arr.every(val => val<6) // every element is true it return true any one of is false it return false 
console.log(ans2);
