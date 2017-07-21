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
  if (chosenToppings.length >= 9) {
    totalOuput = addSize + 11;
    return totalOuput;
  } else if (chosenToppings.length >= 7) {
    totalOuput = addSize + 9;
    return totalOuput;
  } else if (chosenToppings.length >= 5) {
    totalOuput = addSize + 7;
    return totalOuput;
  }else if (chosenToppings.length >= 2) {
    totalOuput = addSize + 5;
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
    $('.showTotal').append("Total: " + newOrderTotal);

   $("#orderResult").fadeIn();
   $("#orderConfirm").hide();
   $(".pizzaSize").hide();
   $(".selectToppings").hide();
   $("form#toppings").hide();
  });
  $("#placeOrder").click(function() {
    $("#orderConfirm").show();
    $("#orderResult").hide();
    $("form#toppings").hide();
    $(".pizzaSize").hide();
  });
  $(".newPizzaOrder").click(function() {
    $("#pizzaSize").val("");
    $("form#toppings").trigger("reset");

    $(".pizzaSize").show();
    $("form#toppings").show();
    $("#orderConfirm").hide();

  });
});
