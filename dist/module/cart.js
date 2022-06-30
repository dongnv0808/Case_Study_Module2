"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    constructor() {
        this.products = [];
        this.totalPrice = 0;
    }
    get $products() {
        return this.products;
    }
    get $totalPrice() {
        for (let product of this.products) {
            this.totalPrice += product.$amount * product.$price;
        }
        return this.totalPrice;
    }
    set $products(value) {
        this.products = value;
    }
    set $totalPrice(value) {
        this.totalPrice = value;
    }
    getAllProductInCart() {
        return this.products;
    }
    addToCart(product) {
        this.products.push(product);
    }
    updateProductInCart(id, product) {
        let indexUpdate = this.findById(id);
        if (indexUpdate !== -1) {
            this.products[indexUpdate] = product;
        }
    }
    removeProductInCart(id) {
        let indexRemove = this.findById(id);
        if (indexRemove !== -1) {
            this.products.splice(indexRemove, 1);
        }
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].$id == id) {
                index = i;
            }
        }
        return index;
    }
}
exports.Cart = Cart;
