const wrapDiv = document.getElementById("wrap");
const ansDigital = document.getElementById("ans");
const calcuDigital = document.getElementById("calcu");
const backspace = "►";
let arrDigital = ansDigital.innerHTML;
let arrCalcu = calcuDigital.innerHTML;
let arrNum = new Array;
let calCount = 0;

function display(num){
    // =
    if(arrNum[1] === 0 && arrCalcu.match(/\//) && num.match(/\=/)) {
        arrCalcu = "";
        ansDigital.innerHTML = "You can't divide 0 !";
        arrNum =[];
        return;
    }   
    if(num.match(/\=/)){
        ansDigital.innerHTML = arrNum[0];
        arrNum.splice(0,arrNum.length);
        return ;
    }
    // backspace
    if(num.match(`${backspace}`)) arrDigital = arrDigital.substring(0,arrDigital.length-1);
    // not 0-9 & dot
    if(num.match(/\d|\./) === null) num = "";
    // 0 -> 0-9
    if(arrDigital.match(/^0/) && arrDigital.match(/\./) === null && num.match(/\d/)) arrDigital = "";
    
    arrDigital += num;
    return ansDigital.innerHTML = arrDigital;
}

function calcu(operator){
    let tem = 0;
    let ans ;
    let num = parseFloat(arrDigital,10);
    arrNum.push(num);
    if(operator.match(`${backspace}`)) return arrDigital.substring(0,arrDigital.length-1);
    if(operator.match(/AC/)){
        window.location.reload();
        return false;
    } 
    if(arrNum.length === 1 ){
        arrCalcu = arrNum[0] + operator;
        return arrDigital ="0";
    }
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
            if(arrNum[1] === 0) return;
            ans = arrNum[0]/arrNum[1];
            arrDigital = (ans).toString();
            arrNum.push(ans);
            break;
        default:
            alert(`ERROR`);
    }
    if(arrNum.length > 2) {
        arrNum.splice(0,2);
    }
    if(operator.match(/\=/)){
        arrCalcu = "";
        return;
    }
    arrCalcu = ans + operator;
    return ;
}

//Collection
function btnclick(e){
    let btnValue = e.target.innerHTML;
    let reg = /\d|\.|►/;
    if(btnValue.match(/\=/) && arrNum.length <1) return;
    // not 0-9
    if(btnValue.match(reg) === null){
        if(arrDigital === "") return;
        calcu(btnValue);
        arrDigital ="0"
    }
    // dot only once
    if(arrDigital.match(/\./) && btnValue.match(/\./)) return;
    display(btnValue);
    calcuDigital.innerHTML = arrCalcu;
}
//Add event listener
for(let i = 0; i < wrapDiv.childElementCount; i++){
    var id = wrapDiv.children[i].getAttribute("id");
    wrapDiv.children[i].style = "grid-area : "+id;
    wrapDiv.children[i].addEventListener("click",btnclick);
};
// keyboard
function keyPress(key){
    let btnValue = key;
    let reg = /\d|\.|►/;
    if(btnValue.match(/\=/) && arrNum.length <1) return;
    // not 0-9
    if(btnValue.match(reg) === null){
        if(arrDigital === "") return;
        calcu(btnValue);
        arrDigital ="0"
    }
    // dot only once
    if(arrDigital.match(/\./) && btnValue.match(/\./)) return;
    display(btnValue);
    calcuDigital.innerHTML = arrCalcu;
}
function transKey(e){
    let str = "";
    asc = e.keyCode;
    key = String.fromCharCode(asc);
    if(key === "*") key = "x";
    if(asc === 13) key = "=";
    str  = key;
    keyPress(str);
}
document.onkeypress=transKey;