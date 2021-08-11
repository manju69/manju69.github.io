const ShoppingCart = require("../model/shopping-cart");
const Product = require("../model/product");
// const express = require('express');
// const session = require('express-session');
// const app = express();

app.use(session({
    secret:'add product to cart', 
    resave:false,
    saveUninitialized:false,   
}));

app.use((req,res)=>{
if(!req.session.views){
    req.session.views = {};
}
next();
});
//add product in the product array
exports.addProduct = (req, res) => {
    ShoppingCart.addToCart(Product.getProduct(req.body.id))
    res.render('shopping_cart', ShoppingCart.getProducts());
};

// exports.addSession = (req, res) => {
//     req.session.views[req.body.id] =Product.getProduct(req.body.id);
//     res.redirect(303, '/cart');
// };

exports.getProducts = (req, res) => {
    res.render('shopping_cart', ShoppingCart.getProducts());
    
};

// exports.displayCart = (req,res)=> {
//         let output = "<ul>";
//         for(let key in req.session.things){
//             output += `<li>Id: ${key}: Product: ${req.session.things[key]}</li>`;
//         }
//         output +=`</ul>`;
//         res.send(output);
// };
