"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManagement = void 0;
class ProductManagement {
    getAll() {
        return ProductManagement.products;
    }
    createNew(product) {
        ProductManagement.id++;
        product.$id = ProductManagement.id;
        ProductManagement.products.push(product);
    }
    updateById(index, product) {
        let indexUpdate = this.findById(index);
        if (indexUpdate !== -1) {
            ProductManagement.products[indexUpdate] = product;
        }
    }
    removeById(index) {
        let indexRemove = this.findById(index);
        if (indexRemove !== -1) {
            ProductManagement.products.splice(indexRemove, 1);
        }
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < ProductManagement.products.length; i++) {
            if (ProductManagement.products[i].$id == id) {
                index = i;
            }
        }
        return index;
    }
}
exports.ProductManagement = ProductManagement;
ProductManagement.products = [];
ProductManagement.id = 0;
