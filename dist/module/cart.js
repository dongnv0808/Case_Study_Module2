"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    constructor() {
        this.products = [];
        this.amount = 0;
        this.totalPrice = 0;
    }
    get $products() {
        return this.products;
    }
    set $products(value) {
        this.products = value;
    }
    get $totalPrice() {
        for (let i = 0; i < this.products.length; i++) {
            this.totalPrice += this.products[i].$price;
        }
        return this.totalPrice;
    }
    set $totalPrice(value) {
        this.totalPrice = value;
    }
    get $amount() {
        return this.amount;
    }
    set $amount(value) {
        this.amount = value;
    }
}
exports.Cart = Cart;
