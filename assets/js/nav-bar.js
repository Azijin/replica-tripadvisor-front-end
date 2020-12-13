document.addEventListener("DOMContentLoaded", () => {
  let navBar = document.getElementById("nav-container");
  let navTitle = document.getElementById("nav-title");
  let options = document.getElementsByClassName("option");

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll >= 270) {
      navBar.classList.add("navigation-menu-scroll");
      options[4].style.display = "none";
      options[5].style.display = "none";
      if (options[6].style.display !== "none") {
        options[6].classList.remove("hidden");
        options[6].classList.add("scroll-hide");
      }

      for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("option-width");
        options[i].classList.add("scroll-option");
      }
      navTitle.style.display = "flex";
    } else if (scroll < 270) {
      navBar.classList.remove("navigation-menu-scroll");
      options[4].style.display = "flex";
      options[5].style.display = "flex";
      let regex = /hidden/;
      if (!regex.test(options[6].classList.value)) {
        options[6].classList.add("hidden");
        options[6].classList.remove("scroll-hide");
      }

      for (let i = 0; i < options.length; i++) {
        options[i].classList.add("option-width");
        options[i].classList.remove("scroll-option");
      }
      navTitle.style.display = "none";
    }
  });
});
