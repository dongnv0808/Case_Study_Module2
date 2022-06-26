"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    constructor($nameCategory) {
        this.id = 0;
        this.products = [];
        this.nameCategory = $nameCategory;
    }
    get $id() {
        return this.id;
    }
    get $nameCategory() {
        return this.nameCategory;
    }
    set $id(value) {
        this.id = value;
    }
    set $nameCategory(value) {
        this.nameCategory = value;
    }
    get $products() {
        return this.products;
    }
    set $products(value) {
        this.products = value;
    }
}
exports.Category = Category;
