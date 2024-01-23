let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

const BASE_URL = "http://localhost:3030";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    name: inputs[0].value,
    img: inputs[1].value
  };
  axios.post(`${BASE_URL}/user`, obj);
});
