// string method
let word =" Kgcags ";
let arr = [];
for (let i = 0; i< word.length; i++) {
arr[i] = word.charAt(i);                   // it separate the string ['k','g','c','a','s']

    }
console.log(arr);

console.log(word.split("a"));                 // it used to split the string. eg:kgcas word.split("a") -> the op is ['kgc','s']

console.log(word.replace("ca","m"));         // it used to replace the string. eg:kgcas word.replace("ca","m") -> the op is kgms
 
console.log(word.endsWith("s"));             // it used to check  the ending letter in the string.
                                            // eg:Kgcasword.endsWith("s") -> the op is true or false

console.log(word.startsWith("g"));       //it used to check  the starting letter in the string.
                                         // eg:Kgcasword.startsWith("g") -> the op is false or  true

console.log(word.toUpperCase());          // it used to change the string lower to upper

console.log(word.toLowerCase());          // it used to change the string upper to lower
           
console.log(word.indexOf("g",2));         // it used to the index

console.log(word.substring(2,4));         
 //it used to cut the string. eg: kgcas word.substring(2,4)-> the op is ca

console.log(word.trim());                  
 // it used to trim the space before and after 