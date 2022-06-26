"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    constructor($id, $category) {
        this.id = 0;
        this.id = $id;
        this.category = $category;
    }
    get $id() {
        return this.id;
    }
    get $category() {
        return this.category;
    }
    set $id(value) {
        this.id = value;
    }
    set $category(value) {
        this.category = value;
    }
}
exports.Category = Category;
