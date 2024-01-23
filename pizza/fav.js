const form = document.querySelector("form");
const input = document.querySelectorAll("input");

const BASE_URL = `http://localhost:3000/user`;
const id = new URLSearchParams(window.location.search).get("id");

async function fillForm() {
  const res = await axios(`${BASE_URL}/${id}`);
  input[0].value = res.data.name;
  input[2].value = res.data.valu;
  input[3].value = res.data.img;
}
if (id) {
  fillForm();
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    name: input[0].value,
    valu: input[1].value,
    img: `../img${input[2].value.split("\\"[1])}`,
  };
  if (!id) {
    console.log(obj);
    axios.post(`${BASE_URL}`, obj);
  }
  input.forEach((item) => (item.value = ""));
});
