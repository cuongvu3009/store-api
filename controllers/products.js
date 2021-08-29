const Product = require("../models/product");

const getAllProductsStatic = (req, res) => {
  res.send("get products static");
};

const getAllProducts = (req, res) => {
  res.send("get all products");
};

module.exports = { getAllProducts, getAllProductsStatic };
