let input = document.querySelector(".input");
let section = document.querySelector("section");
let sec = document.querySelector(".section");
let box = document.querySelector(".box");

const BASE_URL = `http://localhost:8080`;

async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  drawBlog(response.data)
}

getData("blogs");

function drawBlog (data) {
    box.innerHTML = "";
    data.forEach(element => {
        box.innerHTML+= `
    <div class="left">
          <p>${element.author}</p>
          <h4>${ element.body} <a href="">Read More</a></h4>
          <h5>${element.id}</h5>
          <h5>${element.title}</h5>
          <button class="delete">Delete</button>
        <button class="edit">Edit</button>
        </div>
    `
    });
}