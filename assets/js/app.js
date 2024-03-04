    // --------nav-bar
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".menulist");
    hamburger.addEventListener("click", mobileMenu);
    const Navlink  = document.querySelectorAll(".nav-link");
    Navlink.forEach( e  => e.addEventListener("click" , ()=>{
        hamburger.classList.toggle("nav-active");
        document.body.classList.remove("overflow-hidden");
        navMenu.classList.toggle("nav-active");
    }))
    function mobileMenu() {
      hamburger.classList.toggle("nav-active");
      document.body.classList.toggle("overflow-hidden");
      navMenu.classList.toggle("nav-active");
    }

   




    

