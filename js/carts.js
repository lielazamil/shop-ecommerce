let productsInCart =localStorage.getItem("ProductsInCart")
let allproducts = document.querySelector(".products")
let cartsproductDiv=document.querySelector(".carts_products div");

if(productsInCart){
  let item = JSON.parse(productsInCart);
  drawCartProduct(item);
}

function drawCartProduct(products){
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
        <button class="add_to_cart" onClick="removeFromCart(${item.id})"> remove from cart</button>
    </div>
    
</div>
      `
  })
  allproducts.innerHTML = y.join("");
}
///////////////////////////////////////////
function removeFromCart(id) {
  let productsInCart = localStorage.getItem("ProductsInCart");

  if (productsInCart) {
      let items = JSON.parse(productsInCart);
      let updatedItems = items.filter(item => item.id !== id);
      localStorage.setItem("ProductsInCart", JSON.stringify(updatedItems));
      // location.reload();
      drawCartProduct(updatedItems)
  }
}