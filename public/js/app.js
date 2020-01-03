const mysql = require("mysql");
const inquirer = require("inquirer");

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",
  port: 8080,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

//

// At this stage of the project I have input syntax that supports the
// logical requirements of the app. I need to use Jquery methods to reference
// the html syntax with back end code that will allow me to:
// -know what item the user wants to purchase
// -know the quantity of the item the user wants to purchase
// -Total up the amount of the user's bill and refer it back to the user
// - Subtract the amount of items from the inventory of each item total sale
