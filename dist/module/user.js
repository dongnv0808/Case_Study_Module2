"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const cart_1 = require("./cart");
class User {
    constructor($user, $password, $email, $name) {
        this.id = 0;
        this.role = 0;
        this.cart = new cart_1.Cart();
        this.user = $user;
        this.password = $password;
        this.email = $email;
        this.name = $name;
    }
    get $id() {
        return this.id;
    }
    get $user() {
        return this.user;
    }
    get $password() {
        return this.password;
    }
    get $role() {
        return this.role;
    }
    get $email() {
        return this.email;
    }
    get $name() {
        return this.name;
    }
    set $id(value) {
        this.id = value;
    }
    set $user(value) {
        this.user = value;
    }
    set $password(value) {
        this.password = value;
    }
    set $role(value) {
        this.role = value;
    }
    set $email(value) {
        this.email = value;
    }
    set $name(value) {
        this.name = value;
    }
    getAll() {
        return this.cart.getAllProductInCart();
    }
    addToCart(product) {
        this.cart.addToCart(product);
    }
    updateToCart(id, product) {
        this.cart.updateProductInCart(id, product);
    }
    removeToCart(id) {
        this.cart.removeProductInCart(id);
    }
    findByIdProductInCart(id) {
        let index = this.cart.findById(id);
        return index;
    }
    getTotalPriceInCart() {
        return this.cart.$totalPrice;
    }
    findByIndexProductInCart(index) {
        return this.cart.$products[index];
    }
}
exports.User = User;
