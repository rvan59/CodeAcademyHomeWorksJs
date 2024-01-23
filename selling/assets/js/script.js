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
    <div class="section-img">
      <img src="${element.img}" alt="" />
    </div>
    <h4>Wild West Hoodie</h4>
    <div class="section-icons">
      <div class="star">
        <i class="fa-solid fa-star" style="color: #ffa200"></i>
        <span>5.0</span>
      </div>
      <div class="heart">
        <i class="fa-solid fa-heart" style="color: #d7d4d4"></i>
        <span>29</span>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur <br />
      adipisicing.
    </p>
    <div class="sectionbuttons">
      <button class="cartbutton">CART</button>
      <button class="viewbutton">VIEW</button>
      <div class="deleteIcon" onclick=deleteCard("${element.id}",this)>  <i class="fa-solid fa-trash"></i></div>
    </div>
  </div>
        `;
  });
}

async function deleteCard(id,btn) {
  try {
    if (confirm("silmeye eminsen ?")) {
      await axios.delete(`${BASE_URL}/user/${id}`);
      btn.closest(".cart").remove();
    }
  } catch (error) {
    console.log(error);
  }
}
