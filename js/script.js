let userinfo = document.querySelector("#user_info")
let userdata= document.querySelector("#user")
let links= document.querySelector("#links")

if(localStorage.getItem("username")){
  links.remove()
  userinfo.style.display ="flex"
  userdata.innerHTML=localStorage.getItem("username")
  
}
let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click",function(){
  localStorage.clear();
  setTimeout(()=>{
    window.location="login.html"
  } ,1500)
})

//////////////////////////////////////////////////////////////////////
let allproducts = document.querySelector(".products")
let products = [
{
  id:1,
  title:"code 1",
  color:"light brown",
  imageUrl: "Images/coat10.jpg"
},
{
  id:2,
  title:"code 2",
  color:"grey",
  imageUrl: "Images/coat9.jpg"
},
{
  id:3,
  title:"code 3",
  color:"black& brown",
  imageUrl: "Images/coat8.jpg"
},
{
  id:4,
  title:"coat 4",
  color:"black",
  imageUrl: "Images/coat2.jpg"
},
{
  id:5,
  title:"code 5",
  color:" ment green",
  imageUrl: "Images/coat3.jpg"
},
{
  id:6,
  title:"code 6",
  color:"black",
  imageUrl: "Images/coat4.jpg"
},
{
  id:7,
  title:"code 7",
  color:"grey",
  imageUrl: "Images/coat6.jpg"
},
{
  id:8,
  title:"code 8",
  color:"light brown",
  imageUrl: "Images/coat7.jpg"
}
,
{
  id:9,
  title:"code 9",
  color:"light brown",
  imageUrl: "Images/coat5.jpg"
}
,
{
  id:10,
  title:"code 10",
  color:" baby blue& white",
  imageUrl: "Images/coat1.jpg"
}
]
function drawItems(){
  let y = products.map((item)=>{
    return `
    
    <div class="products_item">
    <img class="products_item_img" src="${item.imageUrl}" alt="">
    <div class="product_item_desc">
        <h2>${item.title}</h2>
        <p>it's trindy coat with high quality <br> engoy wearing it now!!</p>
        <span>${item.color}</span>
    </div>
    <div class="product_item_action">
        <button class="add_to_cart" onClick="addToCart(${item.id})"> Add To Cart </button>
        <i class="far fa-heart fav"></i>
    </div>
    
</div>
      `
  })
  allproducts.innerHTML = y;
}
drawItems ()


let badge =document.querySelector(".badge")
let cartsproductDiv = document.querySelector(".carts_products div")

// let addeditem=[];
let addedItem = localStorage.getItem("ProductsInCart")? JSON.parse(localStorage.getItem("ProductsInCart")) :[];
if(addedItem){
  addedItem.map(item=>{
    cartsproductDiv.innerHTML+= `<P>${item.title}</p>`;
  })
  badge.style.display ="block";
  badge.innerHTML = addedItem.length
}


  if(localStorage.getItem("username")){
    function addToCart(id){
      let choosenItem = products.find((item) => item.id ===id);
    
      cartsproductDiv.innerHTML+=`<P>${choosenItem.title}</p>`;

      addedItem=[...addedItem,choosenItem]
      localStorage.setItem("ProductsInCart",JSON.stringify(addedItem) )
      let cartProductsLength= document.querySelectorAll(".carts_products div p")
      // console.log(cartProductsLength.length)
      badge.style.display="block";
      badge.innerHTML = cartProductsLength.length;
    }
  }else{
    window.location = "login.html"
  }


/////////////////////////////////////////////////////////////////////
let shopping_cartIcon =document.querySelector(".shopping_cart")
let cartsProducts =document.querySelector(".carts_products")
shopping_cartIcon.addEventListener("click", opencart)

function opencart(){
  if(cartsproductDiv.innerHTML!=""){
    if(cartsProducts.style.display=="block"){
      cartsProducts.style.display="none"
    }else{
      cartsProducts.style.display="block"
    }
  }
}