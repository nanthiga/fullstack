// To store number
let fullName = "NANTHU";
let mark =[90,80,85];  // it stored in array, [] -> array , comma(,) 
use pani separate pannanum 
console.log(fullName)
console.log(mark[1]); // (mark[]) --> inside the [] the number denoted 
tha value;




// To Store string
let fullName = "NANTHU";
let mark =[90,80,'fail']; 
console.log(fullName);
console.log(mark[2]); 



// To store multiple arrays
let fullName = "NANTHU";
let mark =[90,80,[18,56,[10,20,30]]]; 
console.log(mark[2][2][1]); // first [2] denotes yellow [] 90 is 0, 80 is 1, pink[] is 2.  
                           //second  [2] denotes pink   [] 18 is 0, 56 is 1, blue[] is 2.
                           // Third  [1] denotes blue   [] 10 is 0, 20 is 1, 30     is 2.




// To store multiple arrays using keys
// display method1
let fullName = "NANTHU";
let mark =[90,80,85];
let markobj={
    tamil:90,
    english:80,
    maths:10
}
console.log(markobj["tamil"]);




// To store multiple arrays using keys
// display method2
let fullName = "NANTHU";
let mark =[90,80,85,90];
let markobj ={
    tamil:90,
    english:80,
    maths:10,
    physics:[20,70]
}
console.log(markobj.physics[0]+markobj.physics[1]);




