"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryManagement = void 0;
class CategoryManagement {
    getAll() {
        return CategoryManagement.categorys;
    }
    createNew(t) {
        CategoryManagement.id++;
        t.$id = CategoryManagement.id;
        CategoryManagement.categorys.push(t);
    }
    updateById(index, t) {
        let indexUpdate = this.findById(index);
        if (indexUpdate !== -1) {
            CategoryManagement.categorys[indexUpdate] = t;
        }
    }
    removeById(index) {
        let indexRemove = this.findById(index);
        if (indexRemove !== -1) {
            CategoryManagement.categorys.splice(indexRemove, 1);
        }
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < CategoryManagement.categorys.length; i++) {
            if (CategoryManagement.categorys[i].$id == id) {
                index = i;
            }
        }
        return index;
    }
}
exports.CategoryManagement = CategoryManagement;
CategoryManagement.categorys = [];
CategoryManagement.id = 0;
