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
    const trElm = document.createElement("tr");
    trElm.innerHTML += `
        <td>${element.name}</td>
        <td>${element.country}</td>
        <td>${element.domains[0]}</td>
        <td><a href="">${element.web_pages[0]}</a></td>
        `;
    tBody.append(trElm);
  });
}

search.addEventListener("input", function (e) {
  getData(`search?country=Azerbaijan&name=${e.target.value}`);
});
