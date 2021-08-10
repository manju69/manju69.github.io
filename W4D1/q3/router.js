const express = require("express");
const productController = require("./controller/products_controller");
const shoppingcartController = require("./controller/shopping_cart_controller");
const options = {
    "caseSensitive": false,
    "strict": false
}

const router = express.Router(options);
router.get('',productController.listProduct);

router.get('/:id', productController.getProduct);


router.post('/addToCart', shoppingcartController.addProduct);
router.post('/addToCart', shoppingcartController.addSession);

router.get("/cart",shoppingcartController.displayCart);

module.exports = router;
