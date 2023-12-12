var menuIcon = document.querySelector("#menu-icon");

// Get the menu list element
var menuList = document.querySelector("#menu");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", function () {
  // Toggle the "show" class on the menu list
  menuList.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.getElementById("menu-icon");
  var mobileMenu = document.getElementById("menu");

  menuIcon.addEventListener("click", function () {
    toggleMobileMenu();
  });

  function toggleMobileMenu() {
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
  }
});

// loader

// let loader = document.getElementById("loaderOverlay");

// setTimeout(function () {

//   window.addEventListener("load", function () {
//     loader.style.opacity = 0;

//     loader.addEventListener("transitionend", function () {
//       loader.style.display = "none";
//     });
//   });
// },2000);

let loader = document.getElementById("loaderOverlay");

window.addEventListener("load", function () {
  loader.style.opacity = 0;

  loader.addEventListener("transitionend", function () {
    loader.style.display = "none";
  });
});
