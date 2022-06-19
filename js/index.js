 function openFunction(){
    var nav_mobile = document.getElementById("header__mobile-menu")
    var overlay = document.getElementById("header__menu-overlay")

    nav_mobile.classList.toggle('active')
    overlay.classList.toggle('active')

 }
AOS.init({
    offset: 200,  //offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 400,  //values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false,  //whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom',  //defines which position of the element regarding to window should trigger the animation
  });