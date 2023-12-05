const productsDiv =document.querySelector('.products-div');
const form =document.querySelector('form');
const inputs =document.querySelector('input');
const loading =document.querySelector('.loading');

function fetchProducts(){
    loading.className ="loading"
    fetch('https://api.escuelajs.co/api/v1/products ')
.then((res)=>res.json())
.then(data=>{
    loading.style.display="none"
    data.forEach((item)=>{
     productsDiv.innerHTML +=`<div class="product">
     <div class="product-image">
         <img src="${item.images[0]}" style="width: 100%" alt="" />
     </div>
     <div class="product-heading">
         <p class="title">${item.title}</p>
         <p class="description">${item.description.slice(0,40)}</p>
         <span>Price:${item.price}</span>
         <div><button class="deleteBtn">${item.delete}</button></div>
     </div>
 </div>`
    })
})

}