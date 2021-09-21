function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var myPizza = pizzaOven("cauliflower", "pesto", ["mozzarella, ricotta"], ["artichoke", "mushrooms", "sausage", "bacon"]);
console.log(myPizza);

var wifePizza = pizzaOven("deep dish", "pesto", ["mozzarella", "parmesan"], ["tomato", "pineapple", "mushrooms"]);
console.log(wifePizza);

function randomPizza(crust, sauce, cheese, topping) {
    var pizza = {}
    var random_crust = Math.floor(Math.random() * 2) + 1;
        if(random_crust == 1) {
            crust = "deep dish";
        }
        else {
            crust = "hand tossed";
        }
    var random_sauce = Math.floor(Math.random() * 3) + 1;
        if(random_sauce == 1) {
            sauce = "red sauce";
        }
        else if(sauce == 2) {
            sauce = "pesto";
        }
        else {
            sauce = "alfredo";
        }
    var random_cheese = Math.floor(Math.random() * 3) + 1;
        if(random_cheese == 1) {
            cheese = "mozzarella";
        }
        else if(cheese == 2) {
            cheese = ["mozzarella", "parmesan"];
        }
        else {
            cheese = ["mozzarella", "ricotta"];
        }
    var random_topping = Math.floor(Math.random() * 4) + 1;
        if(random_topping == 1) {
            topping = "mushrooms";
        }
        else if(topping == 2) {
            topping = "artichoke";
        }
        else if(topping == 3) {
            topping = "sausage";
        }
        else {
            topping = "bacon";
        }
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.topping = topping;
    return pizza;
}

var p3 = randomPizza("crust", "sauce", "cheese", "topping");
console.log(p3);