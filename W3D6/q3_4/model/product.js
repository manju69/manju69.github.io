module.exports = class Product {
    static products = [new Product(1, "Doritos", "Snacks", 2.5), new Product(2, "mango", "Fruit", 0.5), new Product(3, "pizza", "cheese pizza",2.78)];
    constructor(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
    save() {
        Product.products.push(this);
    }

    static getProduct(id) {
        return Product.products.find((pro) => pro.id == id);
    }

    static getAll() {
        return Product.products;
    }
}