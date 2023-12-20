const BASE_URL = "http://localhost:9090";
const tbody = document.querySelector("tbody");
let button = document.querySelector("button");
let body = document.querySelector("body");
async function getData() {
  let response = await axios(`${BASE_URL}/products`);
  table(response.data);
}
getData();

function table(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    tbody.innerHTML += `
        <tr>
        <td>${element.id}</td>
        <td><img src="${element.imgUrl}" alt=""></td>
        <td>${element.productName}</td>
        <td>ahtrjyktyyufdjs</td>
        <td>$${element.price}</td>
    </tr>
        `;
  });
}

