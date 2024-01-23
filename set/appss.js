// // SET
// setTimeout(()=>
// {console.log("salam");
// },2000);

const { default: axios } = require("axios");

// setTimeout(
//     (a,b)=>{

//     },3000,4,12
// );

// const names =new Set ([`revan`, `tural`,`elcin`])
//  for( let name of names){
//     console.log(`ad` ,name);
//  }
// names.forEach(name =>console.log(name))

// names.add (`ayxan`)
// names.add (`elcin`)
// names.add (`orxan`)
// names.add(`xeyal`) ,console.log(names);
const names = [`orxan`, `nurlan`, `kenan`];
const namesSet = new Set();
for (name of names) {
  namesSet.add(name);
}
// namesSet.delete(`orxan`) //silir
// namesSet.delete(`orxan`)//silir
// console.log(namesSet.size) //size =uzunluq
// console.log(namesSet.has(`nurlan`)) // olub olmadigini yoxlayir

const number = [, 1, 2, 3, 5, 1, 4, 2, 6, 1, 7];
const nuynumber = new Set(number);
// console.log(nuynumber); //tekrarlayanmayan nomreler
// console.log(...nuynumber);//tekrarlayanmayan nomreler
const a = [1, 2, 4, 4];
const b = [1, 6, 7, 4, 8, 9, 2];
//  const c=[...a,...b] // reqemleri birlesdirdik
//  console.log (new Set(c)); // Set-lr tekrarin qarsisini aldiq

const B = new Set(b);

// console.log(a.filter(num=>B.has(num))); // kesisenleri yazir

// // createElement

// const div = document.createElement("div");

// const text = "cod isleyir";

// const divcon = document.createTextNode(text);

// div.appendChild(divcon);

// div.style.color ="red"

// document.body.appendChild(div);

// var cotainer = document.createElement("p");

//  newParagrah.textContent =" yeni bir p element";
//  var cotainer = document.getElementById("contayner");
//  cotainer.appendChild(newParagrah);

const id = new URLSearchParams(window.location.search).get("id");

async function fillForm() {
  let res = await axios(`${BASE_URL}/${id}`);
  inputs[0].value = res.data.name;
  inputs[1].value = res.data.img;
}
if (id) {
  fillForm();
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    name: inputs[0].value,
    img: `../img${inputs[1].value.split("\\[1")}`,
  };
  if (!id) {
    console.log(obj);
    axios.post(`${BASE_URL}`, obj);
  }
  inputs.forEach((item)=>(item.value=""))
});
