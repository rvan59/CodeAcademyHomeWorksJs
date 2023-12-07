const form = document.querySelector("form");
const inpult = document.querySelector(".input");
const btn = document.querySelector(".btn");

function getWeather(curCity) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      btn.innerHTML = ` 
        <div class="left">
        <p>${data.location.country}</p>
        <p>${data.location.name}</p>
      </div>
        `;
    });
}

getWeather("Ganja");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  getWeather(inpult.value);
});
