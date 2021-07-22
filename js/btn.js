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
  
const noticeBtn = document.querySelector(".notice-btn");
const noticeHeader = noticeBtn.querySelector(".notice-btn__header");
const noticeBody = noticeBtn.querySelector(".notice-btn__body");


function animateBtn ({target}){
    target.animate(btnAni.clicked, btnAni.opt);
}

function toggleNotice (){
    noticeHeader.classList.toggle("open");
    noticeBody.classList.toggle("hidden");
}

noticeHeader.addEventListener("click", animateBtn);
noticeHeader.addEventListener("click", toggleNotice);