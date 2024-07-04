// { 
   //  var name="raj";
    // let greet="Hi";
   //  const space=" ";
// } 
// v ar name="NANTHIGA";
// const space="   ";
// let greet="Hello ";
// console.log(greet+space+name);
let a = 10;
let b =20;

console.log(a++ + b // a=10 b=20 =30 after add a&b a will change as 11, so that answer is 31
    + a++ //a=11 tot=41
    + a++ //a=12 tot=53
    +b// a=13 b=20 tot=73 a=13 means the got affeced so that display 13 , here add only tot+b=53+20=73 so that final ans is 73
);
// decrement 


let a = 10;
let b =20;

console.log(++a + --b         // a=11 b=19 tot=30
    + a--                    //  a=11 b=19 tot=41
    - ++b                   //   a=10 b=20 tot=21
    + ++a                  //    a=11 b=20 tot=32
);


