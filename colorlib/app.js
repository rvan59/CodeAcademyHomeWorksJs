const BASE_URL = "http://localhost:3000";

async function getData() {
  let res = await axios.get(`${BASE_URL}/user`);
  console.log(res.data);
  drawCard(res.data);
}
getData();

let cart = document.querySelector(".carts");

function drawCard(data) {
  cart.innerHTML = "";
  data.forEach((element) => {
    cart.innerHTML += `
    <div class="cart">
              <div class="api-img">
                <img src="${element.img}" alt="" />
              </div>

              <div class="api-names">
                <h1>${element.name}</h1>
                <h2>Meat, Potatoes, Rice, Tomatoe</h2>
              </div>
              <div class="deyer">
                <h1>29$</h1>
                <div class="deleteIcon" onclick=deleteCard("${element.id}",this)>  <i class="fa-solid fa-trash"></i></div>           </div>
          </div>
    `;
  });
}

async function deleteCard(id, btn) {
  if (confirm("?")) {
    await axios.delete(`${BASE_URL}/user/${id}`);
    btn.closest(".apicart").remove();
  }
}

let search = document.querySelector(".search");

search.addEventListener("input", async function (e) {
  let res = await axios.get(`${BASE_URL}/user`);
  let filter = res.data.filter((item) =>
    item.name.toLocaleLOwerCase().includes(e.target.value)
  );
  drawCard(filter);
});
