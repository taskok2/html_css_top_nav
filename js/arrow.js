/*const animations = {
    toggleOpen : [{transform: "rotateZ(0)"},
    {transform: "rotateZ(.25turn)"},
    {transform: "rotateZ(.5turn)"},
    {transform: "rotateZ(.75turn)"},
    {transform: "rotateZ(1turn)"},
    {transform: "rotateZ(1.25turn)"},
    {transform: "rotateZ(1.5turn)"}],
    toggleClose : [{transform: "rotateZ(1.5turn)"},
    {transform: "rotateZ(1.25turn)"},
    {transform: "rotateZ(1turn)"},
    {transform: "rotateZ(.75turn)"},
    {transform: "rotateZ(.5turn)"},
    {transform: "rotateZ(.25turn)"},
    {transform: "rotateZ(0turn)"}],
    wrapOpen : [{width : "0%"},
    {width : "10%"},
    {width : "20%"},
    {width : "30%"},
    {width : "40%"},
    {width : "50%"},
    {width : "60%"},
    {width : "70%"},
    {width : "80%"},
    {width : "90%"},
    {width : "100%"}],
    opt : {
        duration : 1000,
        easing : "ease-in-out",
        fill: "forwards"
    }
}

const toggleBtns = document.getElementsByClassName("description-btn__toggle-btn");

function toggleDescription({target}){
    const targetTag = target.tagName.toLowerCase();

    const icon = ("i"===targetTag) ? target : target.children[0];

    const btn = icon.parentNode;
    const descriptionWrap = btn.parentNode;
    const description = descriptionWrap.children[1];
    
    const isClose = description.classList.contains("hidden");
    description.classList.toggle("hidden");

    if(isClose){
        btn.animate(animations.toggleOpen, animations.opt);
        description.animate(animations.wrapOpen, animations.opt);
    }else{
        btn.animate(animations.toggleClose, animations.opt);

    }
}

for(let i = 0 ; i < toggleBtns.length ; ++i)
    toggleBtns[i].addEventListener("click", toggleDescription);*/

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