/*** Object Constructors ***/


function Product(img, title, price, quantity) {
  this.img = img;
  this.title = title;
  this.price = price;
  this.quantity = quantity;

  }



/*** Global Variables ***/
var cartProducts = [];
var cartQuantity = 0;


/* Product Page */

$(document).on("click", "#shape-square", function() {
    $('#product-image-main').attr('src','images/baby-animal-decorative-pillow-o.jpg');
    $("#product-selection-title").text("Square Couch Pillow");
    $("#product-selection-price").text("$14.99");
    $("#customOrderForm").hide();
});

$(document).on("click", "#shape-round", function() {
    $('#product-image-main').attr('src','images/the-emily-meritt-sleepy-kitty-decorative-pillow-o.jpg');
    $("#product-selection-title").text("Round Couch Pillow");
    $("#product-selection-price").text("$14.99");
    $("#customOrderForm").hide();
});

$(document).on("click", "#shape-dog", function() {
    $('#product-image-main').attr('src','images/animal-shaped-pillows-o.jpg');
    $("#product-selection-title").text("Dog Couch Pillow");
    $("#product-selection-price").text("$19.99");
    $("#customOrderForm").hide();
});

$(document).on("click", "#shape-cat", function() {
    $('#product-image-main').attr('src','images/img16o.jpg');
    $("#product-selection-title").text("Cat Couch Pillow");
    $("#product-selection-price").text("$19.99");
    $("#customOrderForm").hide();
});

$(document).on("click", "#shape-bear", function() {
    $('#product-image-main').attr('src','images/img10o.jpg');
    $("#product-selection-title").text("Bear Couch Pillow");
    $("#product-selection-price").text("$19.99");
    $("#customOrderForm").hide();
});

$(document).on("click", "#shape-bunny", function() {
    $('#product-image-main').attr('src','images/animal-shaped-pillows-o (1).jpg');
    $("#product-selection-title").text("Square Couch Pillow");
    $("#product-selection-price").text("$19.99");
    $("#customOrderForm").hide();
});

$(document).on("click", "#shape-custom", function() {
    $('#product-image-main').attr('src','images/animal-shaped-pillows-o (3).jpg');
    $("#product-selection-title").text("Custom Order");
    $("#product-selection-price").text("$15-$35");
    $("#customOrderForm").show();

});

/* Add to Cart */

$(document).on("click", "#cart-button", function(){

    var newProduct = new Product ($("#product-image-main").attr("src"),
                            $("#product-selection-title").text(),
                            $("#product-selection-price").text(),
                            $("#product-selection-quantity").val());

    cartProducts.push(newProduct);

    cartQuantity = cartQuantity + parseInt($("#product-selection-quantity").val());

    $("#cart-quantity").text("(" + cartQuantity + ")");

    localStorage.setItem("savedCart", JSON.stringify(cartProducts));

});
