function Pizza(selectSize, toppings, total) {
  this.selectSize = selectSize;
  this.toppings = toppings;
  this.total = total;
}


var basePrice = 5;






$(document).ready(function() {
  $("form#toppings").submit(function(event) {
    event.preventDefault();

    $("#pizzaSize").each(function() {
      var sizeInput = $(this).val();
      $('.orderList').append("<li>" + sizeInput + "</li>");
    });

    $("input:checkbox[name=select-toppings]:checked").each(function() {
      var chosenToppings = $(this).val();
      $('.orderList').append("<li>" + chosenToppings + "</li>");
    });
  });
});
