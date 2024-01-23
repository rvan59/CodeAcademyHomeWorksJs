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
        <div class="img">
            <img src="${element.img}" alt="">
        </div>
        <div class="">
            <div class="name">${element.name}}</div>
            <div class="valu">${element.valu}</div>
        </div>
<div class="deleteIcon" onclick=deleteCard("${element.id}",this)>  <i class="fa-solid fa-trash"></i></div>        
         </div>`;
  });
}

async function deleteCard(id, btn) {
  try {
    if (confirm("eminsiz?")) {
      await axios.delete(`${BASE_URL}/user/${id}`);
      btn.closest(".cart").remove();
    }
  } catch (error) {
    console.log(error);
  }
}

