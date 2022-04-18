let product=document.querySelector('.Products');
let productlist=document.querySelector('.productList');
let burgericon=document.querySelector('.burger');
let header=document.querySelector('header ul');
product.addEventListener('click', ()=>{
    if(productlist.style.visibility==='hidden'){
    productlist.style.visibility='visible';
    }else{
        productlist.style.visibility='hidden';
    }
})
burgericon.addEventListener('click', ()=>{
    if(header.style.visibility==='hidden'){
     header.style.visibility='visible';
    }else{
        header.style.visibility='hidden';
    }
})