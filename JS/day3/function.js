/ default function
let fullName = "NANTHU";
 function functionName() { // function --> keyword declare
     console.log("working"); // entha line ahh read pannathu out of the block read panitu tha read panu
 }
functionName();         // calling the function using functionName()




// parameterized function
let fullName = "NANTHU";
function functionName(a) {
    ++a;
    return a;
}
console.log(functionName(10));



// parameterized function 
// FOR ADDITION
 let fullName = "NANTHU";
function add(a,b) {
   console.log(a);
   console.log(b);
   return a+b;
 }
 console.log(add(b=10,a=30));


// parameterized function 
// FOR SUBTRACTION
let fullName = "NANTHU";
function sub(a,b) {
   console.log(a);
   console.log(b);
   return a-b;
 }
 console.log(sub(a=30,b=10));




// parameterized function 
// FOR MULTIPLICATION
let fullName = "NANTHU";
function mul(a,b) {
   console.log(a);
   console.log(b);
   return a*b;
 }
 console.log(mul(b=10,a=30));




// parameterized function 
// FOR DIVISION
let fullName = "NANTHU";
function div(a,b) {
   console.log(a);
   console.log(b);
   return a/b;
 }
 console.log(div(b=10,a=30));



// parameterized function 
// FOR Modulo
let fullName = "NANTHU";
function mod(a,b) {
   console.log(a);
   console.log(b);
   return a%b;
 }
 console.log(mod(b=10,a=30));





// parameterized function 
// TO using separator 
function add(...numbers) {
    return numbers;
}
console.log(add(5,9,10,13));





