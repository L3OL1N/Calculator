const wrapDiv = document.getElementById("wrap");
const digital = document.getElementById("digital");
let arrDigital = digital.innerHTML;

function display(e){
    let num = e.target.innerHTML;
    let reg = /\d|\./;
    if(num.match(reg) === null) return;
    if(arrDigital.match(/\./) != null && num.match(/\./)!= null) return;
    if(arrDigital === "0"){
        arrDigital = "";
    }
    arrDigital += num;
    
    return digital.innerHTML = arrDigital;
}

//add event listener
for(let i = 0; i < wrapDiv.childElementCount; i++){
    var id = wrapDiv.children[i].getAttribute("id");
    wrapDiv.children[i].style = "grid-area : "+id;
    wrapDiv.children[i].addEventListener("click",display);
};