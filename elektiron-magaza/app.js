const product = [
  {
    id: 0,
    Image: "",
    title: "Z Flop",
    price: 120,
  },
  {
    id: 1,
    Image: "",
    title: "Z Flip",
    price: 60,
  },
  {
    id: 2,
    Image: "",
    title: "250D",
    price: 230,
  },
  {
    id: 3,
    Image: "",
    title: "Head Phones",
    price: 100,
  },
];
const categories =[...new Set(product.map((item)=>
      {return item} ))]
      let i=0;
 document.getElementById('root').innerHTML =categories.map((item)=>
 {
    var{image,title,price}= item;
return(
    `<div class='box'>
    <div class='img-box'>
    <img class='images' src=${image}></img>
    </div>
    <div class='bottom'>
    <p>${title}</p>
    <h2>$ ${price}.00 </h2>`+
    "<button onclick-'addtocart("+(i++)+")'>Add to cart</button>"+
    `</div> </div>`
    
)
}).join('')         
var cart=[];
function addtocart(a){
cart.push({...categories [a]});
displaycart();
}

function displaycart(a){
  let j =0;
  if (cart.length==0) {
    document.getElementById('cartitem').innerHTML="Your cart is empty";

  }else{
    document.getElementById("cartitem").innerHTML=cart.map((items)=>
    {
      var{image ,title,price}= items;
      return(
        `<div class='cart-item'
        <div class='row-img'>
        <img class='rowimg' src=${image}>
        </div>
        <p style='font-size:12px;'>${title}</p>
        <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
        "<i class='fa-solid fa-trash' onclinc='delElement("+(j++)+")'></i></div>"
      );
    }).join('');
  }}