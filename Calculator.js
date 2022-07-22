const wrapDiv = document.getElementById("wrap");
const ansDigital = document.getElementById("ans");
const calcuDigital = document.getElementById("calcu");
let arrDigital = ansDigital.innerHTML;
let arrCalcu = calcuDigital.innerHTML;
let arrNum = new Array;
let calCount = 0;
function display(num){
    if(num === "=") return ansDigital.innerHTML = arrNum[0];
    if(num.match(/\d|\./) == null) {
        num = "";
    }
    if(arrDigital.match(/^0/) && arrDigital.match(/\./) === null && num.match(/\d/)){
        arrDigital = "";
    }
    if(num.match(/\d|\./) != null && calCount === 1 ){
    }
    arrDigital += num;
    return ansDigital.innerHTML = arrDigital;
}
function calcu(operator){
    let tem = 0;
    let ans ;
    let num = parseFloat(arrDigital,10);
    arrNum.push(num);
    console.log(num);
    if(arrNum.length === 1 ){
        arrCalcu = arrNum[0] + operator;
        return arrDigital ="0";
    } 
    if(num === 0 && operator === "/") return alert("ERROR");
    switch(arrCalcu.match(/\D$/)[0]){
        case "+" :
            ans = arrNum[0]+arrNum[1];
            arrDigital = (ans).toString();
            arrNum.push(ans);
            break;
        case "-" :
            ans = arrNum[0]-arrNum[1];
            arrDigital = (ans).toString();
            arrNum.push(ans);
            break;
        case "x" :
            ans = arrNum[0]*arrNum[1];
            arrDigital = (ans).toString();
            arrNum.push(ans);
            break;
        case "/" :
            ans = arrNum[0]/arrNum[1];
            arrDigital = (ans).toString();
            arrNum.push(ans);
            break;
        case "=" :
            ansDigital.innerHTML = arrDigital;
            console.log("=");
            break;
        default:
            console.log(`ERROR`);
    }
    if(arrNum.length > 2) {
        arrNum.splice(0,2);
    }
    if(operator === "="){
        arrCalcu = "";
        return;
    }
    arrCalcu = ans + operator;

    console.log(arrCalcu);
    return ;
}

//Collection
function btnclick(e){
    let btnValue = e.target.innerHTML;
    let reg = /\d|\./;

    if(btnValue.match(reg) === null){
        calcu(btnValue);
        //arrCalcu = arrNum[0];
        arrDigital ="0"
    }
    if(arrDigital.match(/\./) != null && btnValue.match(/\./)!= null) return;
    display(btnValue);
    console.log(arrNum);
    calcuDigital.innerHTML = arrCalcu;
}
//Add event listener
for(let i = 0; i < wrapDiv.childElementCount; i++){
    var id = wrapDiv.children[i].getAttribute("id");
    wrapDiv.children[i].style = "grid-area : "+id;
    wrapDiv.children[i].addEventListener("click",btnclick);
};