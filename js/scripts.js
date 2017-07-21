function Pizza(selectSize, toppings, total) {
  this.selectSize = selectSize;
  this.toppings = toppings;
  this.total = total;
}

Pizza.prototype.getTotal = function() {
  if (this.selectSize == "Small" || this.selectSize == "Medium") {
    basePrice += 2;
    return basePrice;
  } else if (this.selectSize == "Large" || this.selectSize == "X-Large") {
    basePrice += 4;
    return basePrice;
  }
}

var basePrice = 5;






$(document).ready(function() {
  $("form#toppings").submit(function(event) {
    event.preventDefault();
var sizeInput = $("#pizzaSize").val();
  var chosenToppings = $("input:checkbox[name=select-toppings]:checked").val();

    $("#pizzaSize").each(function() {
      // var sizeInput = $(this).val();
      $('.orderList').append("<strong>" + "Size select: " + "</strong>" + sizeInput);
    });
debugger;
    $("input:checkbox[name=select-toppings]:checked").each(function() {
      // var chosenToppings = $(this).val();
      $('.orderList').append("<li>" + chosenToppings + "</li>");

      var newOrder = new Pizza(sizeInput, chosenToppings, 0);
      console.log(newOrder);
      newOrder.getTotal();
    });
  });
});
