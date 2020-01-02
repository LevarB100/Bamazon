const db = require("../models");

module.exports = function(app) {
  app.get("/api/products", function(req, res) {
    db.Product.findAll({}).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });
};

// Get route for retrieving a single post
app.get("/api/products/:id", function(req, res) {
  db.Product.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbProduct) {
    console.log(dbProduct);
    res.json(dbProduct);
  });
});
