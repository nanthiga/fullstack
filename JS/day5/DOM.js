// // DOM
// document.title = "KGCAS";
// let elem= document.getElementById("heading");
// let content= elem.innerHTML;
// console.log(content)

// // to change the content method 1

// elem.innerHTML ="<h1>Welcome</h1>";
// console.log()

// // to change the content method 2
// elem.innertext ="HII!";
// console.log()
// function darkmode() {
//     let elem= document.getElementById("heading");
//     elem.innerHTML ="<h1>Welcome</h1>";
//    document.body.style.backgroundColor ="#000000";
//    document.body.style.color ="#ffffff"
// }
// contManupulate()
// setTimeout(contManupulate,2000);//setTimeout is a predefined function 

document.getElementById("heading").setAttribute("style","background-color:black; color:white;");
// let h1att= document.getElementById("heading").getAttribute("class");
document.getElementById("heading").style.backgroundColor ="#000";
document.getElementById("heading").style.backgroundColor ="#ffffff";
let h1att= document.getElementById("heading").className="heading";
document.getElementById("heading").classList.add("com-head");
 document.getElementById("heading").classList.remove("head");
console.log(h1att)