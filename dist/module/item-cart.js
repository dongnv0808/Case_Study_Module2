"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCart = void 0;
class ItemCart {
    constructor() {
        this.products = [];
        this.amount = 0;
    }
    get $products() {
        return this.products;
    }
    get $amount() {
        return this.amount;
    }
    set $products(value) {
        this.products = value;
    }
    set $amount(value) {
        this.amount = value;
    }
}
exports.ItemCart = ItemCart;
