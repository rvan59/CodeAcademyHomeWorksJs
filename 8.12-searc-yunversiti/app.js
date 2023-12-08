let search = document.querySelector(".search");
let tBody = document.querySelector("tbody");

const BASE_URL = `http://universities.hipolabs.com`;

async function getData(endpoint) {
  let res = await axios(`${BASE_URL}/${endpoint}`);
  console.log(res.data);
  drawTable(res.data);
}
getData("search?country=Azerbaijan");

function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    const trElme = document.createElement("tr");
    trElme.innerHTML += `
        <td>${element.name}</td>
        <td>${element.country}</td>
        <td>${element.domains}</td>
        <td>${element.web_pages[0]}</td>
        `;
    tBody.append(trElme);
  });
}

search.addEventListener("input", function (e) {
  let endpoint = `search?country=Azerbaijan&name=${e.target.value}`;

  console.log(salam);
  getData(endpoint);
});
