const ShoppingCart = require("../model/shopping-cart");
const Product = require("../model/product");

//add product in the product array
exports.addProduct = (req, res) => {
    const p = Product.getProduct(req.body.id);
    ShoppingCart.addToCart(p)
    res.send(p.name);
};

// exports.addSession = (req, res) => {
//     req.session.views[req.body.id] =Product.getProduct(req.body.id);
//     res.redirect(303, '/cart');
// };

exports.displayCart = (req,res)=> {
    res.render('shopping_cart', ShoppingCart.getProducts())
};
