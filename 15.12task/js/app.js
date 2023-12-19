// let care = document.querySelector(".care");

// BASE_URL = "http://localhost:7070";

// async function getData(products) {
//   let response = await axios(`${BASE_URL}/${products}`);
//   console.log(response.data);
//   drawTable(response.data);
// }

// getData("products");

// function drawTable(data) {
//   data.forEach((element) => {
//     const trElem = document.createElement("div");
//     trElem.innerHTML += `
//         <div class="${element.id}">
//             <h4 style="font-family: 'Open Sans', sans-serif;">CARE CREAM</h4>
//             <h5>${element.title}</h5>
//             <a href="">
//                 <img src="${element.imageUrl}" alt="" />
//             </a>
//         </div>`;
//         care.append(trElem)
//   });
// }
