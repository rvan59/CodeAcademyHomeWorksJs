const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

const BASE_URL = `http://localhost:3000/user`;
const id = new URLSearchParams(window.location.search).get("id");

async function fillForm() {
  const res = await axios(`${BASE_URL}/${id}`);
  inputs[0].value = res.data.category;
  inputs[1].value = res.data.name;
  inputs[2].value = res.data.img;
}
if (id) {
  fillForm();
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    category: inputs[0].value,
    name: inputs[1].value,
    img: `../img${inputs[2].value.split("\\"[2])}`,
  };
  if (!id) {
    console.log(obj);
    axios.post(`${BASE_URL}`, obj);
  }
  inputs.forEach((item) => (item.value = ""));
});
