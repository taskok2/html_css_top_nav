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

function calculate(command, i, j){
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
        case "**":
            return i**j;
        default:
            return "Command is wrong";                        
    }
}