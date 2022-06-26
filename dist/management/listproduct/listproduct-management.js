"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryManagement = void 0;
class CategoryManagement {
    getAll() {
        return CategoryManagement.listProduct;
    }
    createNew(t) {
        CategoryManagement;
    }
    updateById(index, t) {
        throw new Error("Method not implemented.");
    }
    removeById(index) {
        throw new Error("Method not implemented.");
    }
    findById(id) {
        throw new Error("Method not implemented.");
    }
}
exports.CategoryManagement = CategoryManagement;
CategoryManagement.listProduct = [];
CategoryManagement.id = 0;
