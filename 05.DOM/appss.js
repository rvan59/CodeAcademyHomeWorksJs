// task1//
// let button = document.querySelector(".buttton");
// let parentDiv = button.parentElement;

// button.addEventListener("click", function () {

//   parentDiv.style.width = "150px";
//   parentDiv.style.height = "150px";
//   parentDiv.style.backgroundColor = "green";
//   parentDiv.style.position="relative"
//   button.style.position="absolute"
//   button.style.bottom="10px"
//   button.style.right="10px"
// });

// task2//

// let button = document.querySelector(".buttton");
// // let parentDiv = button.parentElement;

// button.addEventListener("click", function () {
//   document.body.classList.toggle("bg");
// });

// task4

let liArr = ["baku", "Ganja", "Tartar", "Barde", "Goygol"];
let ulElem = document.querySelector(".list");
ulElem.style.listStyle = "none";

liArr.forEach((item) => {
  let liElem = document.createElement("li");
  liElem.innerText = item;
  liElem.addEventListener("click", function () {
    this.remove();
  });
  ulElem.append(liElem);
});
