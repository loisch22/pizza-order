function Pizza(selectSize, toppings, total) {
  this.selectSize = selectSize;
  this.toppings = toppings;
  this.total = total;
}

Pizza.prototype.getSizeTotal = function(sizeInput) {
  if (sizeInput === "Small" || sizeInput === "Medium") {
    subtotal = this.total += 2;
    addSize = basePrice + subtotal;
    return addSize;
  } else if (sizeInput === "Large" || sizeInput === "X-Large") {
    subtotal = this.total += 4;
    addSize = basePrice + subtotal;
    return addSize;
  }
}

Pizza.prototype.getTotal = function(chosenToppings) {
  if (chosenToppings.length > 2) {
    totalOuput = addSize + 4;
    return totalOuput;
  } else {
    totalOuput = addSize + 2;
    return totalOuput;
  }
}

var basePrice = 5;
var subtotal;
var addSize;
var totalOuput;

$(document).ready(function() {
  $("form#toppings").submit(function(event) {
    event.preventDefault();
    debugger;
    var sizeInput = $("#pizzaSize").val();
    var chosenToppings = $("input:checkbox[name=select-toppings]:checked").each(function() {
      chosenToppings = $(this).val();
    });

    var newOrder = new Pizza(sizeInput, chosenToppings, 0);
    var newOrderSize = newOrder.getSizeTotal(sizeInput);
    var newOrderTotal = newOrder.getTotal(chosenToppings);



    $('.orderList').append("<strong>" + "Size select: " + "</strong>" + sizeInput);
    $("input:checkbox[name=select-toppings]:checked").each(function() {
      chosenToppings = $(this).val();
      $('.orderList').append("<li>" + chosenToppings + "</li>");
    });
    $('.orderList').append("Total: " + newOrderTotal);


  });
});
