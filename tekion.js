let product = document.querySelector(".Products");
let productlist = document.querySelector(".productList");
let burgericon = document.querySelector(".burger");
let header = document.querySelector("header ul");
let sidebar = document.querySelector(".sidebar")
product.addEventListener("click", () => {
      productlist.classList.toggle('productlistreveal');  
  }
);
burgericon.addEventListener("click", () => {
  if(header.style.display==="none"){
    header.style.display = "flex";
  }else{
      header.style.display="none"
  }
  
});
