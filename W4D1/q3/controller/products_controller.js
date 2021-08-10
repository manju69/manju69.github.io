const Product = require("../model/product");

exports.getProduct = (req, res) => {
    let product = Product.getProduct(req.params.id);
    res.render('product',Product.getProduct(req.params.id));
    //res.render('product',{id : product.id, price: product.price, description: product.description, name:product.name});
};

exports.addProduct = (req, res) => {
    res.render('add-product', res.params);
};

exports.listProduct = (req,res)=>{
    res.render("home", {products:Product.getAll()});
};
