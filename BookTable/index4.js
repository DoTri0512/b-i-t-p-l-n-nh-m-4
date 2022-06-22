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

const MenuCloseEl = document.querySelector('.header__menu-bars');
const MenuList = document.querySelector('.nav__list');
const MenuIconEl = document.querySelector('.nav__icon');
const MenuBgOverlayEl = document.querySelector('.nav__bgOverlay');


window.addEventListener('DOMContentLoaded', () =>{
  document.body.style.visibility = 'visible';
});

const navOpen = () => {
   navList.classList.add('show');
  navBgOverlayEl.classList.add('active');
  document.body.style= 'visibility: visible; height: 100vh; width:100vw; overflow:hidden;';
}

const navClose = () => {
  navList.classList.remove('show');
  navBgOverlayEl.classList.remove('active');
  document.body.style= 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

navIconEl.addEventListener('click', navOpen);

navCloseEl.addEventListener('click', navClose);

navBgOverlayEl.addEventListener('click', navClose)

// // AOS
// // AOS.refreshHard();
// AOS.init({
//   offset: 200, // offset (in px) from the original trigger point
//   delay: 100, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
// });

// // const dishGridEl = Array.from(document.querySelectorAll('#dishGrid'));
// // if (dishGridEl.length > 0){
// //   // console.log(dishGridEl)
// //   dishGridEl.forEach(item => {
// //     item.setAttribute('data-aos', 'fade-up');
// //   })
// // }