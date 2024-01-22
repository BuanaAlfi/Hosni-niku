const btnHamburger = document.getElementById("btn-hamburger");
const btnSearch = document.getElementById("search-btn");

btnSearch.addEventListener("click", () => {
  const search = document.getElementById("search");
  search.classList.toggle("hidden");
});

btnHamburger.addEventListener("click", () => {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  hamburgerMenu.classList.toggle("hidden");
});

btnHamburger.addEventListener("click", function () {
  btnHamburger.classList.toggle("hamburger-active");
});

window.onscroll = function () {
  const header = document.querySelector(".header");
  const fixednav = header.offsetTop;

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
