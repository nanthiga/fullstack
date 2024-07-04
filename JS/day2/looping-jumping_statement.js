// 2. Looping Statement
// for example
// op la 0 1 2 nu print agum block ku veliya "console.log(i);" ethula i oda value 0 la irunthu 3 ah maritum
for (var i= 0; i<3; i++) {
    console.log(i);
    
}
console.log(i);




// method1 to print even number
for (var i= 2; i<10; ++i) {
   if(i%2==0){
    console.log(i);
   }
    
}




// to print pattern
// nested for loop                             
// i-> row; j-> col

let star ="";
for(var i=0;i<5;i++){
    for(let j = 0; j < 5; j++){
        star+="* "
    }
    console.log(star);
    star="";
   
   
}



for(var i=0;i<1;i++){
    for(let j = 0; j < 5; j++){
        star+="* "
        console.log(star);
    }
    star="";
   
   
}




// while loop example
var on= true;
let count =1;
while (on) {
    console.log("executed");
  if (count==3) {
    on=false;
  }
    console.log(count++);
   
}



// continue & Break
var on= true;
let count =1;
while (on) {
    console.log("executed");
    console.log(count++);
  if (count==3) {
   break;
  }
   
}

