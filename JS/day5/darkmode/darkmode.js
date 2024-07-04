function darkmode() { 
    document.body.style.backgroundColor ="#000000";
    document.body.style.color ="#ffffff"
    let button = document.getElementById("button");
    button.innerText ="Light mode";
    button.innerHTML +=`<i class='bx bx-sun' ></i>`
}
function lightmode() { 
    document.body.style.backgroundColor ="#ffffff";
    document.body.style.color ="#000000"
    let button = document.getElementById("button");
    button.innerText ="Dark mode"
    button.innerHTML +=`<i class='bx bx-moon'></i>`
}
function modechange() {
    let btxt = document.getElementById("button").innerText
    if(btxt=="Dark mode"){
        darkmode();
    }else if ( btxt=="Light mode" ){
        lightmode();
    }
}

