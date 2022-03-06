////////Mobile responding 
const MenuClose = document.querySelector("#menu-close");
const icon = document.querySelector("#icon-m")

icon.addEventListener("click", () => {
    if (MenuClose.className === "menu-list") {
      MenuClose.classList.add("res")
    } else {
      MenuClose.classList.remove("res")
    }
})
const navbar = document.querySelector("nav");
window.onscroll = function (){
  if (window.pageYOffset >= 30) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }

}

// let mainNav = document.querySelectorAll(".menu-list ul");
// let navBarIcon = document.querySelector("#icon");

// navBarIcon.addEventListener("click", function() {
//   mainNav.classList.toggle("active-menu");
// });
