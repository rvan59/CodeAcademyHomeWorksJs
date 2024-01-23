const BASE_URL = "http://localhost:3000";
let data = [];
async function getData() {
  let res = await axios.get(`${BASE_URL}/user`);
  console.log(res.data);
  data = res.data;
  drowcart(res.data);
}
getData();

let cart = document.querySelector(".cart");

function drowcart(data) {
  cart.innerHTML = "";
  data.forEach((element) => {
    cart.innerHTML += `
                    <div class="menu">
                        <div class="menu-top">
                            <h1>${element.name}</h1>
                        </div>
                        <div class="menu-down">
                            <h6>with wild mushrooms and asparagus</h6>
                            <h5>...............</h5>
                            <h5>$${element.valyu}</h5>
                            <img src="${element.img}" alt="">

                            <i class="fa-regular fa-trash-can" onclick=deleteCard("${element.id}",this)></i>

                        </div>
                    </div>
        `;
  });
}
// -----delet----
async function deleteCard(id, btn) {
  if (confirm("?")) {
    await axios.delete(`${BASE_URL}/user/${id}`);
    btn.parentElement.remove();
  }
}
// ----search----
let search = document.querySelector(".search");

search.addEventListener("input", async function (e) {
  let res = await axios.get(`${BASE_URL}/user`);
  let filtered = res.data.filter((item) =>
    item.name.toLocaleLowerCase().includes(e.target.value)
  );
  drowcart(filtered);
});


// -----sort----
const sort = document.querySelector(".sort");
sort.addEventListener("click", function () {
  let sorted = [];
  if (this.textContent === "asc") {
    this.textContent = "desc";
    sorted = data.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    this.textContent = "asc";
    sorted = data.sort((a, b) => b.name.localeCompare(a.name));
  }

  drowcart(sorted);
});
