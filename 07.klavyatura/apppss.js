const contayner = document.querySelector(".container");
const listone = document.querySelector(".list.one");
const listtwo = document.querySelector(".list.two");
const words = document.querySelector(".words");

const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", function (e) {
  if (words.innerText.length > 60) {
    words.innerText = "";
  }
  if (e.code == "Space") {
    words.innerText += "";
  }

  keys.forEach((item, i) => {
    console.log(item.innerText == e.key);
    if (item.innerText == e.key) {
      item.style.opacity = "0";
      item.style.backgroundColor = "#06c06f";
      item.style.transition = "150ms";
      words.innerText += `${item.innerText}`;
    }
  });
});

window.addEventListener("keyup", function (e) {
  if (e.code == "Space") {
    words.innerText += ``;
  }
});
