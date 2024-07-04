// set time out
// function start() {
//     console.log("Start")
// }
// setTimeout(start,2000)
// function running() {
//     console.log("running")
// }
// running();
// set interval
//                                                               
// num increse
//date   
// let d= new Date();
// let num = 1;
// function start() {
//     // document.getElementById("time").innerHTML =++num
//     document.getElementById("time").innerHTML =d
    
// }
// console.log(d)
function time() {
    var date= new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
}
let start = setInterval(time,1000);
function stop() {
    clearInterval(start);
}