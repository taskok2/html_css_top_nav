const btnAni={
    clicked : [{transform: "translateY(0)"},
    {transform: "translateY(-10px)"}],
    opt : {
        duration : 60,
        easing : "linear",
        iterations : 2,
        direction : "alternate"
    }
}    

const calForm = document.getElementById("calculate-container");

calForm.addEventListener("submit", e=>{
    e.preventDefault();
});

const calModeBtn = document.getElementById("calculate-mode");
const calSubmit = document.getElementById("calculate-submit");
const calMode = ["+", "-", "*", "/", "**"];

function changeMode({target}){
    let modeIdx = calMode.indexOf(target.innerText)+1;
    if(1 > modeIdx || calMode.length <= modeIdx)
        modeIdx = 0;
    target.innerText = calMode[modeIdx];
}

calModeBtn.addEventListener("click", changeMode);

function animateBtn ({target}){
    target.animate(btnAni.clicked, btnAni.opt);
}

calModeBtn.addEventListener("click", animateBtn);
calSubmit.addEventListener("click", animateBtn);

function calculate(command, i, j){
    if(isNaN(i) || isNaN(j))
        return "";
    if(999<i || 999 < j)
        return "";    

    switch(command){
        case "add" :
        case "+" :
            return i+j;
        case "substract" :
        case "-" :
            return i-j;
        case "multiply" :
        case "*":
            return i*j;
        case "divide":
        case "/":
            return i/j;
        case "remainder":
        case "%":
            return i%j;
        default:
            return "Command is wrong";                        
    }
}

const inputs = document.getElementsByClassName("calculate-input");

function requestCalculate(){
    inputs[2].value = calculate(calModeBtn.innerText, parseInt(inputs[0].value), parseInt(inputs[1].value));
}

calSubmit.addEventListener("click", requestCalculate);