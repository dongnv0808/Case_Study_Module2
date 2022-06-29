"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryMenu = void 0;
const rl = __importStar(require("readline-sync"));
const category_management_1 = require("../../management/category/category-management");
const category_1 = require("../../module/category");
const e_admin_menu_1 = require("../../module/e-admin-menu");
class CategoryMenu {
    constructor() {
        this.categoryManagement = new category_management_1.CategoryManagement();
    }
    run() {
        let choice = -1;
        do {
            console.log('--Quan ly danh muc--');
            console.log('1.Hien thi danh muc');
            console.log('2.Them danh muc');
            console.log('3.Sua danh muc');
            console.log('4.Xoa danh muc');
            console.log('5.Hien thi san pham theo danh muc');
            console.log('0. Quay lai');
            choice = +rl.question('Nhap lua chon:');
            switch (choice) {
                case e_admin_menu_1.CategoryChoice.SHOWALLCATEGORY: {
                    this.showAllCategory();
                    break;
                }
                case e_admin_menu_1.CategoryChoice.CREATECATEGORY: {
                    this.createCategory();
                    break;
                }
                case e_admin_menu_1.CategoryChoice.UPDATECATEGORY: {
                    this.updateCategory();
                    break;
                }
                case e_admin_menu_1.CategoryChoice.REMOVECATEGORY: {
                    this.removeCategory();
                    break;
                }
                case e_admin_menu_1.CategoryChoice.SHOWPRODUCTBYCATEGORY: {
                    this.showProductByCategory();
                    break;
                }
                case 0: {
                    break;
                }
            }
        } while (choice !== 0);
    }
    showAllCategory() {
        let categorys = this.categoryManagement.getAll();
        if (categorys.length == 0) {
            console.log('Chua tao danh muc!\n');
        }
        else {
            for (let category of categorys) {
                console.log(`Ma danh muc: ${category.$id} | Ten danh muc: ${category.$nameCategory}\n`);
            }
        }
    }
    inputCategory() {
        let nameCategory = rl.question("Nhap ten danh muc:");
        return new category_1.Category(nameCategory);
    }
    createCategory() {
        console.log('--Tao danh muc--');
        let category = this.inputCategory();
        this.categoryManagement.createNew(category);
    }
    updateCategory() {
        console.log('--Sua danh muc--');
        let categories = this.categoryManagement.getAll();
        for (let i = 0; i < categories.length; i++) {
            console.log(`Ma: ${categories[i].$id} | Ten: ${categories[i].$nameCategory}`);
        }
        let idCategory = +rl.question("Nhap id danh muc muon sua:");
        let indexCategory = this.categoryManagement.findById(idCategory);
        let category = this.categoryManagement.findByIdCategory(idCategory);
        if (indexCategory !== -1) {
            if (category !== null) {
                category.$nameCategory = rl.question('Nhap ten danh muc:');
                this.categoryManagement.updateById(indexCategory, category);
                console.log('\nSua danh muc thanh cong!\n');
            }
        }
        else {
            console.log('Nhap sai ma danh muc!');
        }
    }
    removeCategory() {
        let categories = this.categoryManagement.getAll();
        for (let category of categories) {
            console.log(`Id: ${category.$id} | Ten: ${category.$nameCategory}`);
        }
        console.log('--Xoa danh muc--');
        let idCategory = +rl.question("Nhap id danh muc muon xoa:");
        this.categoryManagement.removeById(idCategory);
        console.log('\nXoa thanh cong!\n');
    }
    showProductByCategory() {
        var _a;
        let categories = this.categoryManagement.getAll();
        console.log('--Hien thi san pham theo danh muc--');
        if (categories.length == 0) {
            console.log('Hien chua co danh muc nao ton lai!');
        }
        else {
            for (let i = 0; i < categories.length; i++) {
                console.log(`Ma: ${categories[i].$id} | Ten: ${categories[i].$nameCategory}\n`);
            }
            let nameCategory = rl.question('Nhap ten danh muc san pham:');
            let category = this.categoryManagement.findByNameCategory(nameCategory);
            if (category == null) {
                console.log('Nhap sai ten danh muc!');
            }
            else {
                if (category.$products.length == 0) {
                    console.log('Trong danh muc chua co san pham!');
                }
                else {
                    for (let i = 0; i < categories.length; i++) {
                        if (categories[i].$nameCategory == nameCategory) {
                            for (let j = 0; j < categories[i].$products.length; j++) {
                                if (categories[i].$products[j].$category !== null) {
                                    console.log(`Ma: ${categories[i].$products[j].$id}, Ten: ${categories[i].$products[j].$nameProduct}, Mo ta: ${categories[i].$products[j].$id}, Gia: ${categories[i].$products[j].$price}, Loai: ${(_a = categories[i].$products[j].$category) === null || _a === void 0 ? void 0 : _a.$nameCategory}\n`);
                                }
                                else {
                                    continue;
                                }
                            }
                        }
                        else {
                            continue;
                        }
                    }
                }
            }
        }
    }
}
exports.CategoryMenu = CategoryMenu;
