const BASE_URL = "http://localhost:8080";
async function getData() {
  let res = await axios.get(`${BASE_URL}/users`);
  console.log(res.data);
  drawCard(res.data)
}
getData();

let cart = document.querySelector(".cartss");
function drawCard(data) {

  cart.innerhtml = "";
  data.forEach(element => {
    cart.innerHTML +=`
    <div class="cart">
    <img src="${element.img}" alt="">
    <h1>${element.melumat}</h1>
    <h2>${element.name}</h2>
</div>
    `
  });

}
