//CONTROL FLOW STATEMENT
// 1. Conditional Statement
// 2. Looping Statement
// 3.Jump Statement

// 1. Conditional Statement
// * Simple if
// * if else
// * nested if
// * Switch case



// if example
var age=10;
if(age<18){
    console.log("Your not eligible.");
}



// if-else example
var age=29;
// age<18 less than 18 eduthukum age>40 above 40 eduthukum in between 18-39 ku 18<age nu kututha Thank you nu varum
if(18<=age && age<60){ 
   console.log("THANK YOU");
}
else{ 
console.log("Your not eligible.");
}




// if elif example method-1
var age=18;
if(18<=age && age<55){ 
   console.log("THANK YOU");
}
else if(age>=55 && age<= 60){
   console.log("THANK YOU FOR YOUR VAULABLE TIME! ");
}
else{
   
   console.log("Your not eligible.");
}



// if elif example method-2
var age=55;
if(18<=age && age<=60){ 
   if(age>=55){
       console.log("THANK YOU FOR YOUR VAULABLE TIME!");
   }
   else{
       console.log("THANK YOU");
   }
}
else{
   console.log("Your not eligible.");
}





// Switch case example
// switch(key) key la ena statement kutukamo atha run agum 
// break kutukalana next case um execute agitum
// switch condition based ku aprm looping statement ku use panuvom
let mark=43;
switch (true) {
   case mark<40:
       console.log("fail!")
       break;
   case mark>40:
       console.log("pass!")
       break;
   default:
       console.log("Invalid Mark! pls enter the crt mark")
       break;
}





