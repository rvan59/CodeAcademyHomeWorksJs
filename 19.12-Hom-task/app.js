const BASE_URL = "http://localhost:8080";
const cards = document.querySelector(".products");
const menuIcon = document.querySelector('.nav3')
const nav = document.querySelector('.nav2')

async function getData() {
  let response = await axios(`${BASE_URL}/products`);
  //   console.log(response.data);
  drawCards(response.data);
}

getData();

function drawCards(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
    <div class="jip">
              
    <img src="${element.imgUrl}" alt="">
    <h5>${element.productName}</h5>
    <h6>$ ${element.price}</h6>
  
  </div>
    `;
  });
}


menuIcon.addEventListener("click", function() {
  nav.classList.toggle('show');
})