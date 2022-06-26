"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryManagement = void 0;
class CategoryManagement {
    findByIdCategory(id) {
        let category = null;
        for (let i = 0; i < CategoryManagement.categorys.length; i++) {
            if (id == CategoryManagement.categorys[i].$id) {
                category = CategoryManagement.categorys[i];
                break;
            }
            else {
                category = null;
            }
        }
        return category;
    }
    getAll() {
        return CategoryManagement.categorys;
    }
    createNew(t) {
        CategoryManagement.id++;
        t.$id = CategoryManagement.id;
        CategoryManagement.categorys.push(t);
    }
    updateById(id, t) {
        let category = this.findByIdCategory(id);
        if (category !== null) {
            category = t;
        }
    }
    removeById(id) {
        let indexRemove = this.findById(id);
        if (indexRemove !== -1) {
            CategoryManagement.categorys.splice(indexRemove, 1);
        }
        else {
            console.log('Danh muc khong ton tai!');
        }
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < CategoryManagement.categorys.length; i++) {
            if (id == CategoryManagement.categorys[i].$id) {
                index = i;
                break;
            }
        }
        return index;
    }
    findByNameCategory(name) {
        for (let i = 0; i < CategoryManagement.categorys.length; i++) {
            if (CategoryManagement.categorys[i].$nameCategory == name) {
                return CategoryManagement.categorys[i];
            }
        }
        return null;
    }
}
exports.CategoryManagement = CategoryManagement;
CategoryManagement.categorys = [];
CategoryManagement.id = 0;
