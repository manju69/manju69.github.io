const ShoppingCart = require("../model/shopping-cart");
const Product = require("../model/product");

exports.addProduct = (req, res) => {
    ShoppingCart.addToCart(Product.getProduct(req.body.id))
    res.render('shopping-cart', ShoppingCart.getProducts());
};

exports.getProducts = (req, res) => {
    res.render('shopping-cart', ShoppingCart.getProducts());
};
