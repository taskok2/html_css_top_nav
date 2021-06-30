const popBtn = document.querySelector(".tm__pop a");
const popIcon = popBtn.childNodes[0];
popBtn.addEventListener("click", function(){
    const menulist =  document.querySelector(".tm__menu-list");
    const social = document.querySelector(".tm__social");

    menulist.classList.toggle("s-hide");
    social.classList.toggle("s-hide");
});

popBtn.addEventListener("mouseover", function(){
    popIcon.classList.remove("fa-bars");
    popIcon.classList.add("fa-hamburger");
});

popBtn.addEventListener("mouseout", function(){
    popIcon.classList.add("fa-bars");
    popIcon.classList.remove("fa-hamburger");
});