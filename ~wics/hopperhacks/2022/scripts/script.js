//hamburger menu
var menu = document.getElementById("menu-btn")
var menu_items = document.getElementById("menu-items")
menu.addEventListener('click', () => {
  if(menu.classList.contains("is-active")){
    menu.classList.remove("is-active")
    menu_items.classList.remove("active")
  }
  else {
    menu.classList.add("is-active")
    menu_items.classList.add("active")
  }
})

// var scrollpos = window.scrollY;
// var header = document.getElementById("header");
// var windowheight = window.innerHeight;
// var headerheight = document.getElementById("header").offsetHeight;

// function add_class_on_scroll() {
//   header.classList.add("fixed");
// }

// function remove_class_on_scroll() {
//   header.classList.remove("fixed");
// }

// window.addEventListener('scroll', function() {
//   scrollpos = window.scrollY;
//   if (scrollpos > (windowheight - headerheight)) {
//     add_class_on_scroll();
//   } else {
//     remove_class_on_scroll();
//   }
// });
