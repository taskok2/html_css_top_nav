const popBtn = document.querySelector("#nav__pop-btn");
popBtn.addEventListener("click", function (e) {
        const navSocial = document.querySelector(".nav__social");
        const navMenu = document.querySelector(".nav__menu");
        
        navSocial.classList.toggle("active");
        navMenu.classList.toggle("active");



        // const navMenuItems = document.querySelectorAll(".menu__item");

        // if(navSocial.classList.contains("h-view")){
        //     navSocial.classList.remove("h-view");
        //     navMenuItems.forEach(function(i){
        //         i.classList.remove("h-view");
        //     });

        // } else {
        //     navSocial.classList.add("h-view");
        //     navMenuItems.forEach(function(i){
        //         i.classList.add("h-view");
        //     });
        // }
});
