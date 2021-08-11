module.exports = class ShoppingCart {
    static products = [];

    static addToCart(product) {
        console.log(product);
    		let index = -1;
    		for(let i = 0; i< ShoppingCart.products.length; i++){
        	if(ShoppingCart.products[i].id === product.id){
          	index = i;
            console.log('found at: '+i)
            break;
            }
      	}
        if(index>=0){
        	ShoppingCart.products[index].quantity = ShoppingCart.products[index].quantity + 1;
          console.log(ShoppingCart.products);

        }
        else{
        	ShoppingCart.products.push({...product, quantity: 1});
        }
        
    }

    static getProducts() {
        return { products: ShoppingCart.products };
    }

}

