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
  }
});
