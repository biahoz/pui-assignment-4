function loadProducts(){
  for (let i=0; i<cartProducts.length; i++){
    let product = cartProducts[i]

    $("#cart-image-" + i).attr("src", product.img);


  }
}


var cartProducts = {};


/*** Document Load ****/
$(document).ready(function() {

  console.log("test");

  cartProducts = JSON.parse(localStorage.getItem("savedCart"));

  if (cartProducts === null) {
    $("#cart-check").text("Nothing Here Yet!");

  } else {

    for(i = 0; i < cartProducts.length; i++) {
      $('wrapper').append('<div id="div-'+ i +'"> </div>');
      $("#div-" + i).append('<div id="cart-image-'+ i +'"> </div>');
    }

    loadProducts();

  }

});
