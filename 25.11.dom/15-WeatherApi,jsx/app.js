const form = document.querySelector("form");
const inpult = document.querySelector(".input");
const btn = document.querySelector(".btn")

function getWeather (curCity){
    fetch(`https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`)
    .then(res=>res.json())
    .then(data=>{
        btn.innerHTML =`
        <div class="left">
        <p>${data.location.name},${data.location.country}</p>
        <img src="${data.current.condition.icon}">
        <p>${data.current.condition.text}</p>
        <p> Selsie: ${data.current.temp_c}</p>
        <p> : ${data.current.temp_fw}</p>
       
      </div>
        `
    })
}

getWeather("Ganja");

form.addEventListener("submit",function(e){
    e.preventDefault();

    getWeather(inpult.value);
})
