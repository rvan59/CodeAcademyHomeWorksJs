const BASE_URL = "http://localhost:3030";

async function getData() {
  let res = await axios.get(`${BASE_URL}/user`);
  console.log(res.data);
  drowcart(res.data);
}
getData();

let cart = document.querySelector(".carts");

function drowcart(data) {
  cart.innerHTML = "";
  data.forEach((element) => {
    cart.innerHTML += `
    <div class="cart">
        <img src="${element.img}" alt="">
        <div class="name">
        ${element.name}
        <i class="fa-solid fa-trash"   oncilck=deletCard("${element.id}",this)></i>
        </div>
</div>
    `;
  });
}

async function deletCard(id, btn) {
  if (confirm("?")) {
    await axios.delete(`${BASE_URL}/user/${id}`);
    btn.parentElement.remove();
  }
}
