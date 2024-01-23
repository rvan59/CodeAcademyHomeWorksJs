const BASE_URL = "http://localhost:3000";

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
                    <h5>${element.name}</h5>
                    <i class="fa-regular fa-trash-can" onclick=deleteCard("${element.id}",this)></i>
                  </div>
            </div>
        `;
  });
}

async function deleteCard(id, btn) {
  if (confirm("?")) {
    await axios.delete(`${BASE_URL}/user/${id}`);
    btn.parentElement.remove();
  }
}

let search = document.querySelector(".search");

search.addEventListener("input", async function (e) {
  let res = await axios.get(`${BASE_URL}/user`);
  let filter = res.data.filter((item) =>
    item.name.toLocaleLowerCase().includes(e.target.value)
  );
  deleteCard(filter);
});
