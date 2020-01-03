$.get("/api/products", function(data) {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    // Inside the loop...

    // 2. Create a variable named "letterBtn" equal to $("<button>");
    const tablerow = $("<tr>");

    // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
    const productId = $("<td>");
    const productName = $("<td>");
    const productPrice = $("<td>");
    const productQuantity = $("<td>");
    // const Buybttn = $();
    // const productselection = $("<td");

    // 5. Then give each "letterBtns" a text equal to "letters[i]".
    productId.text(data[i].id);
    productName.text(data[i].product_name);
    productPrice.text(data[i].price);
    productQuantity.text(data[i].stock_quantity);

    tablerow.append(productId, productName, productPrice, productQuantity);

    $("#tbody").append(tablerow);

    const button = document.querySelector("#submitButton");

    button.addEventListener("click", function() {
      purchase();
    });

    const purchase = function makePurchase(product, quantity) {
      connection.query(
        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
        [quantity, product.item_id],
        function(err, res) {
          // Let the user know the purchase was successful, re-run loadProducts
          console.log(
            "Successfully purchased " +
              quantity +
              " " +
              product.product_name +
              "'s!"
          );
          loadProducts();
        }
      );
    };
  }
});

// The next stages of this application is to:

// -Link the products in the db to a logic that will record the amount of product in the inventory.
// -Link the products in the db to a logic that will can request and record how much a
// product a customer wants to purchase. These can be tied to an "on.click" event of the
// submit button.
// -The final amount paid by the customer, the final quantity of goods and a thank you message
// should also be appended to the DOM after the final interaction(on.click event).
// -Syntax should also be added to be able to detect when the inventory is "out of stock"
// of a particular product and inform a customer that the product they want to buy is out
// of stock.
