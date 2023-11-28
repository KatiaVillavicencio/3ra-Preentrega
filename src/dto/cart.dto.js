export default class CartDTO {
    constructor(user) {
        this.products=cart.products;
        this.image = product.image;
        this.price = product.price;
        this.stock = product.stock;
        this.category = product.category;
        this.availability = product.availability
    }
}