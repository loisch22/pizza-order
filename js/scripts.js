
//business/back-end logic
var basePrice = 5;
var subtotal;
var addSize;
var totalOuput;
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

//UI/front-end logic
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


    $('.orderSize').append("<strong>" + "Size: " + "</strong>" + sizeInput);
    $("input:checkbox[name=select-toppings]:checked").each(function() {
      chosenToppings = $(this).val();
      $('.orderList').append("<li>" + chosenToppings + "</li>");
    });
    $('.showTotal').append("<strong>" + "Total: " + "</strong>" + "$" + newOrderTotal);

   $("#orderResult").fadeIn();
   $("#orderConfirm").hide();
   $(".pizzaSize").hide();
   $(".selectToppings").hide();
   $("form#toppings").hide();
   $(".top").hide();
  });
  $("#placeOrder").click(function() {
    $("form#toppings").trigger("reset");
    $("#pizzaSize").val("");

    $("#orderConfirm").show();
    $("#orderResult").hide();
    $("form#toppings").hide();
    $(".pizzaSize").hide();
    $(".top").hide();
  });
  $(".newPizzaOrder").click(function() {

    $("form#toppings").show();
    $(".pizzaSize").show();
    $(".top").show();
    $("#orderConfirm").hide();
    $("#orderResult").hide();

  });
});
