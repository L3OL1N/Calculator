const wrapDiv = document.getElementById("wrap");
const digital = document.getElementById("digital");
let arrDigital = digital.innerHTML;
let arrNum = new Array;
let calCount = 0;
function display(num){
    if(num.match(/\d|\./) == null) {
        num = "";
    }
    if(arrDigital.match(/^0/) && arrDigital.match(/\./) === null && num.match(/\d/)){
        arrDigital = "";
    }
    console.log(calCount);
    if(num.match(/\d|\./) != null && calCount === 1 ){
        arrDigital ="";
        //digital.innerHTML = "";
    }
    arrDigital += num;
    // && calCount === 1
    return digital.innerHTML = arrDigital;
}
function calcu(operator){
    let tem = 0;
    let ans ;
    let num = parseFloat(arrDigital,10);
    arrNum.push(num);
    
    if(arrNum.length <= 1 ) return arrDigital ="0";
    switch(operator){
        case "+" :
            ans = arrNum[0]+arrNum[1];
            arrDigital = (ans).toString();
            arrNum.push(ans);
            break;
        case "-" :
            console.log("-");
            break;
        case "x" :
            console.log("x");
            break;
        case "/" :
            console.log("/");
            break;
        case "=" :
            digital.innerHTML = arrDigital;
            console.log("=");
            break;
        default:
            console.log(`ERROR`);
    }
    if(arrNum.length > 2) {
        arrNum.shift();
    }
    return ;
}

//Collection
function btnclick(e){
    let btnValue = e.target.innerHTML;
    let reg = /\d|\./;

    if(btnValue.match(reg) === null){
        calcu(btnValue);
        calCount ++;
    }
    if(arrDigital.match(/\./) != null && btnValue.match(/\./)!= null) return;
    display(btnValue);
    //console.log(arrNum);
    calCount = 0 ;
}
//Add event listener
for(let i = 0; i < wrapDiv.childElementCount; i++){
    var id = wrapDiv.children[i].getAttribute("id");
    wrapDiv.children[i].style = "grid-area : "+id;
    wrapDiv.children[i].addEventListener("click",btnclick);
};