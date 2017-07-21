function Pizza(selectSize, toppings, total) {
  this.selectSize = selectSize;
  this.toppings = toppings;
  this.total = total;
}

Pizza.prototype.getSizeTotal = function(sizeInput) {
  if (sizeInput === "Small" || sizeInput === "Medium") {
    var subtotal = this.total += 2;
    var priceOutput = basePrice + subtotal;
    return priceOutput;
  } else if (sizeInput === "Large" || sizeInput === "X-Large") {
    var subtotal = this.total += 4;
    var priceOutput = basePrice + subtotal;
    return priceOutput;
  }
}

var basePrice = 5;

$(document).ready(function() {
  $("form#toppings").submit(function(event) {
    event.preventDefault();
    debugger;
    var sizeInput = $("#pizzaSize").val();
    var chosenToppings = $("input:checkbox[name=select-toppings]:checked").val();
    var newOrder = new Pizza(sizeInput, chosenToppings, 0);
    var newOrderSize = newOrder.getSizeTotal(sizeInput);



    $('.orderList').append("<strong>" + "Size select: " + "</strong>" + sizeInput);
    $("input:checkbox[name=select-toppings]:checked").each(function() {
      chosenToppings = $(this).val();
      $('.orderList').append("<li>" + chosenToppings + "</li>");
    });
    $('.orderList').append("Total: " + newOrderSize);


  });
});
