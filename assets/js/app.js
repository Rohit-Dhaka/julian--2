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

   



    const tabcontant = document.querySelectorAll(".tabcontant");
    const firstcontant = document.querySelector(".tabcontant");
    const fistactivetab = document.querySelector(".allbtn div");
    tabcontant.forEach(e => e.style.display = "none");
    firstcontant.style.display = "block";
    fistactivetab.classList.add("tab1active");
    function clickhere(tabs) {
        tabcontant.forEach(e => e.style.display = "none");
        const selectcontant = document.getElementById(tabs)
        selectcontant.style.display = "block";
        const tabsactive = document.querySelectorAll(".allbtn div")
        tabsactive.forEach(e => e.classList.remove("tab1active"))
        const selecttab = document.querySelector(`[onclick="clickhere('${tabs}')"]`)
        selecttab.classList.add("tab1active")
    }


    

