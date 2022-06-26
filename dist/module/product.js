"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor($nameProduct, $description, $price) {
        this.id = 0;
        this.category = null;
        this.nameProduct = $nameProduct;
        this.description = $description;
        this.price = $price;
    }
    get $id() {
        return this.id;
    }
    get $nameProduct() {
        return this.nameProduct;
    }
    get $description() {
        return this.description;
    }
    get $price() {
        return this.price;
    }
    set $id(value) {
        this.id = value;
    }
    set $nameProduct(value) {
        this.nameProduct = value;
    }
    set $description(value) {
        this.description = value;
    }
    set $price(value) {
        this.price = value;
    }
    get $category() {
        return this.category;
    }
    set $category(value) {
        this.category = value;
    }
}
exports.Product = Product;
