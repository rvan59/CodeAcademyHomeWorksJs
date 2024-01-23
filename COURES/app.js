const BASE_URL = "http://localhost:3000";


async function getData() {
  let res = await axios.get(`${BASE_URL}/user`);
  console.log(res.data);
  drawCard(res.data);
}
getData();

let cart = document.querySelector(".sectionapi");
function drawCard(data) {
  cart.innerHTML = "";
  data.forEach((element) => {
    cart.innerHTML += `
    <div class="apicart">
              <div class="img"><img src="${element.img}" alt="" /></div>
              <h3>${element.name}</h3>
              <p>${element.paragraf}</p>
              <div class="deleteIcon" onclick=deleteCard("${element.id}",this)>  <i class="fa-solid fa-trash"></i></div>           </div>
    `;
  });
}

async function deleteCard(id, btn) {
  try {
    if (confirm("silmek isdeyirsen")) {
      await axios.delete(`${BASE_URL}/user/${id}`);
      btn.closest(".apicart").remove();
    }
  } catch (error) {
    console.log(error);
  }
}


