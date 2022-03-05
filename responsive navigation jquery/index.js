$(document).ready(function() {

  // Menu-icon effect
  $(".icon-menu").on("click", function() {
    $(".nav-link ul").toggleClass("showing");
  });

  // Scrolling effect
  $(document).on("scroll", function() {
    if($(window).scrollTop()) {
      $('nav').addClass('white');
      $('ul li a').addClass('black');
    }else{
      $('nav').removeClass('white');
      $('ul li a').removeClass('black');
    }
  });

});






























// const body = document.querySelector("body");
// const navbar = document.querySelector(".navbar");
// const menuBtn = document.querySelector(".menu-btn");
// const cancelBtn = document.querySelector(".cancel-btn");
// menuBtn.onclick = ()=>{
//   navbar.classList.add("show");
//   menuBtn.classList.add("hide");
//   body.classList.add("disabled");
// }
// cancelBtn.onclick = ()=>{
//   body.classList.remove("disabled");
//   navbar.classList.remove("show");
//   menuBtn.classList.remove("hide");
// }
// window.onscroll = ()=>{
//   this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
// }