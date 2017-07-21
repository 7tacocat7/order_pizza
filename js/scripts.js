$(document).ready(function(){
  $("form#pizza-selection").submit(function(event) {

    var inputtedSize = $("select#size").val();
    var inputtedCrust = $("select#crust").val();
    var inputtedTopping1 = $("input#topping1").val();
    var inputtedTopping2 = $("select#topping2").val();




    var myPizza = new Pizza(inputtedSize, inputtedCrust, inputtedTopping1, inputtedTopping2);

    function Pizza(size, crust, topping1, topping2, price) {
      this.size = size,
      this.crust = crust,
      this.topping1 = topping1,
      this.topping2 = topping2,
      this.price = 0

    };


    Pizza.prototype.Size = function() {
      if(this.size === "small"){
        return 9;
      } else  if(this.size === "medium"){
        return  13;
      } else  if(this.size === "large"){
        return  16;
      }
    }

    Pizza.prototype.Crust = function() {
      if(this.crust === "thin crust") {
        return  0;
      } else if(this.crust === "thick crust"){
        return  3;
      } else if(this.crust === "flatbread crust"){
        return  2;
      }
    }

    Pizza.prototype.Topping1 = function() {
      if(this.topping1 === "cheese" || this.topping1 === "no cheese" ) {
        return  0;
      } else if(this.topping1 === "vegan cheese"){
        return  1;
      }
      else if(this.topping1 === "extra cheese" || this.topping1 === "extra vegan cheese"){
        return  3;
      }
    }

    Pizza.prototype.Topping2 = function() {
      if(this.topping2 === "pepperoni" || this.topping2 === "vegan pepperoni" ) {
        return  2;
      } else if(this.topping2 === "extra pepperoni" || this.topping2 === "extra vegan pepperoni"){
        return  4;
      } else if(this.topping2 === "none"){
        return  0;
      }

    }


    Pizza.prototype.Price = function() {
      return 0 + this.Size() + this.Crust() + this.Topping1() + this.Topping2();
    }

    Ticket.prototype.receipt = function() {
    return this.size + " " + this.crust + " " + this.topping1 + " " + this.topping2 + this.Price();
    }


    var inputtedSize = "";
    var inputtedCrust = "";
    var inputtedTopping1 = "";
    var inputtedTopping2 = "";
    var Price = 0;


    $("#result").text(myPizza.Price())
  event.preventDefault();
  });
});
