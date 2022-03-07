window.addEventListener("load" , ()=>{

    calculateCartTotal();

})
// capturing

let productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click",(e) => {
    // console.log(event.target);

    let quantityP = e.target.parentElement.parentElement.querySelector("#product-quantity")

    // minus button

    if(e.target.classList.contains("fa-minus") || e.target == quantityP.parentElement.firstElementchild){

        if(quantityP.innerText > 1){

            quantityP.innerText--;

        // calculate product total and cart total

        calculateProductTotal(quantityP);

        }

        else {

            if(confirm("product will be removed")){

                quantityP.parentElement.parentElement.parentElement.remove();

        // calculate product total and cart total

        calculateProductTotal(quantityP);

        }}
     }
    // plus buttons 

    else if(e.target.classList == "fas fa-plus" || e.target == quantityP.parentElement.lastElementChild){
        quantityP.innerText++;

        // calculate product total and cart total

        calculateProductTotal(quantityP);
    }

    // remove buttons
    else if (e.target.className == "remove-product"){

        if(confirm("product will be removed")){
            quantityP.parentElement.parentElement.parentElement.remove();
        }
        calculateCartTotal();

        // console.log("remove button clicked");
    }
    else{
        console.log("other elements clicked");
    }
 })

 const calculateProductTotal = (quantityP) =>{


    console.log(quantityP.innerText);

    let productPrice = quantityP.parentElement.parentElement.querySelector("strong")
    let productTotalPrice = quantityP.parentElement.parentElement.querySelector(".product-line-price")

    productTotalPrice.innerText = (productPrice.innerText * quantityP.innerText).toFixed(2);
    

     calculateCartTotal();

 }

 const calculateCartTotal = () =>{

    let productTotalPrices = document.querySelectorAll(".product-line-price");
    let subtotal = 0;

    productTotalPrices.forEach(total=>{
        subtotal += parseFloat(total.innerText);
    });
    
    let taxPrice = +(subtotal * localStorage.getItem("taxRate")).toFixed(2);
   
    let shipping = (subtotal > 0 ? parseFloat(localStorage.getItem("shippingPrice")): 0)
   

    let cartTotal = subtotal + shipping + taxPrice;
    console.log(cartTotal);

    document.querySelector("#cart-subtotal p:nth-child(2)").innerText = subtotal.toFixed(2);
    document.querySelector("#cart-tax p:nth-child(2)").innerText = taxPrice.toFixed(2);
    document.querySelector("#cart-shipping p:nth-child(2)").innerText = shipping.toFixed(2);
    document.querySelector("#cart-total").lastElementChild.innerText = cartTotal.toFixed(2);

 }

 