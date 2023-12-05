let contayner= document.querySelector(".container");
let image=document.createElement("img");

let BASE_URL ='https://dog.ceo/api/breeds/image/random';
image.src="https://images.dog.ceo/breeds/schipperke/n02104365_1104.jpg";
contayner.append(image);

setInterval(() => {
    fetch(`${BASE_URL}`)
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data);
        image.src=data.message;
    });
}, 5000);
