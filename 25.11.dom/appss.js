let nav = document.querySelector("nav");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  window.scrollY > 0
    ? header.classList.add("header.scroll")
    : header.classList.remove("header.scroll");
});
