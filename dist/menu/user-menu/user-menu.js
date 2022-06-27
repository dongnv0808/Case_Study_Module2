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
exports.UserMenu = void 0;
const product_management_1 = require("../../management/product/product-management");
const rl = __importStar(require("readline-sync"));
var ChoiceMenuUser;
(function (ChoiceMenuUser) {
    ChoiceMenuUser[ChoiceMenuUser["SHOWALLPRODUCT"] = 1] = "SHOWALLPRODUCT";
    ChoiceMenuUser[ChoiceMenuUser["FILTERPRODUCTSBYPRICE"] = 2] = "FILTERPRODUCTSBYPRICE";
    ChoiceMenuUser[ChoiceMenuUser["SEARCHPRODUCTBYNAME"] = 3] = "SEARCHPRODUCTBYNAME";
    ChoiceMenuUser[ChoiceMenuUser["SORTPRODUCTBYPRICE"] = 4] = "SORTPRODUCTBYPRICE";
    ChoiceMenuUser[ChoiceMenuUser["ORDERPRODUCTS"] = 5] = "ORDERPRODUCTS";
    ChoiceMenuUser[ChoiceMenuUser["SHOWPRODUCTBYCATEGORY"] = 6] = "SHOWPRODUCTBYCATEGORY";
    ChoiceMenuUser[ChoiceMenuUser["SHOWHOSTSELLINGPRODUCT"] = 7] = "SHOWHOSTSELLINGPRODUCT";
})(ChoiceMenuUser || (ChoiceMenuUser = {}));
class UserMenu {
    constructor() {
        this.productManagement = new product_management_1.ProductManagement();
    }
    run() {
        let choice = -1;
        do {
            console.log('\n--Menu user--\n');
            console.log('1. Hien thi tat ca san pham');
            console.log('2. Loc danh sach san pham theo khoang gia');
            console.log('3. Tim kiem san pham theo ten');
            console.log('4. Sap xep san pham theo gia');
            console.log('5. Dat mua san pham');
            console.log('6. Hien thi san pham theo danh muc');
            console.log('7. Hien thi san pham dang ban chay');
            console.log('0. Dang xuat');
            choice = +rl.question('Nhap lua chon cua ban');
            switch (choice) {
                case ChoiceMenuUser.SHOWALLPRODUCT: {
                    this.showAllProduct();
                    break;
                }
                case ChoiceMenuUser.FILTERPRODUCTSBYPRICE: {
                    this.filterProductsByPrice();
                    break;
                }
                case ChoiceMenuUser.SEARCHPRODUCTBYNAME: {
                    this.searchProductByName();
                    break;
                }
                case ChoiceMenuUser.SORTPRODUCTBYPRICE: {
                    this.sortProductByPrice();
                    break;
                }
                case ChoiceMenuUser.ORDERPRODUCTS: {
                    this.showAllProduct();
                    break;
                }
                case ChoiceMenuUser.SHOWPRODUCTBYCATEGORY: {
                    this.showAllProduct();
                    break;
                }
                case ChoiceMenuUser.SHOWHOSTSELLINGPRODUCT: {
                    this.showAllProduct();
                    break;
                }
            }
        } while (choice !== 0);
    }
    showAllProduct() {
        let products = this.productManagement.getAll();
        if (products.length !== 0) {
            for (let product of products) {
                console.log(`Id: ${product.$id} | Ten: ${product.$nameProduct} | Mo ta: ${product.$description} | Gia: ${product.$price}`);
            }
        }
        else {
            console.log('Chua co san pham nao ton tai!');
        }
    }
    filterProductsByPrice() {
        let choice = -1;
        let products = this.productManagement.getAll();
        do {
            console.log('--Loc danh sach san pham theo khoang gia--');
            console.log('1. Duoi 2 trieu');
            console.log('2. 2 - 4 trieu');
            console.log('3. 4 - 7 trieu');
            console.log('4. 7 - 13 trieu');
            console.log('5. Tren 13 trieu');
            console.log('0. Quay lai');
            choice = +rl.question('Nhap lua chon cua ban:');
            switch (choice) {
                case 1: {
                    console.log('--Khoang gia duoi 2 trieu--\n');
                    for (let i = 0; i < products.length; i++) {
                        if (products[i].$price <= 2000000) {
                            console.log(`${i + 1} Ten: ${products[i].$nameProduct} | Mo ta: ${products[i].$description} | Gia: ${products[i].$price}`);
                        }
                    }
                    break;
                }
                case 2: {
                    console.log('--Khoang gia 2 - 4 trieu--\n');
                    for (let i = 0; i < products.length; i++) {
                        if (products[i].$price > 2000000 && products[i].$price <= 4000000) {
                            console.log(`${i + 1} Ten: ${products[i].$nameProduct} | Mo ta: ${products[i].$description} | Gia: ${products[i].$price}`);
                        }
                    }
                    break;
                }
                case 3: {
                    console.log('--Khoang gia 4 - 7 trieu--\n');
                    for (let i = 0; i < products.length; i++) {
                        if (products[i].$price > 4000000 && products[i].$price <= 7000000) {
                            console.log(`${i + 1} Ten: ${products[i].$nameProduct} | Mo ta: ${products[i].$description} | Gia: ${products[i].$price}`);
                        }
                    }
                    break;
                }
                case 4: {
                    console.log('--Khoang gia 7 - 13 trieu--\n');
                    for (let i = 0; i < products.length; i++) {
                        if (products[i].$price > 7000000 && products[i].$price <= 13000000) {
                            console.log(`${i + 1} Ten: ${products[i].$nameProduct} | Mo ta: ${products[i].$description} | Gia: ${products[i].$price}`);
                        }
                    }
                    break;
                }
                case 5: {
                    console.log('--Khoang gia tren 13 trieu--\n');
                    for (let i = 0; i < products.length; i++) {
                        if (products[i].$price > 13000000) {
                            console.log(`${i + 1} Ten: ${products[i].$nameProduct} | Mo ta: ${products[i].$description} | Gia: ${products[i].$price}`);
                        }
                    }
                    break;
                }
            }
        } while (choice !== 0);
    }
    searchProductByName() {
        let products = this.productManagement.getAll();
        let arrSearch = [];
        let flag = true;
        let nameProduct = rl.question('Nhap ten san pham: ');
        for (let i = 0; i < products.length; i++) {
            if (products[i].$nameProduct.includes(nameProduct) == true) {
                arrSearch.push(products[i]);
                flag = true;
            }
        }
        if (arrSearch.length == 0) {
            flag = false;
        }
        if (flag == true) {
            for (let product of arrSearch) {
                console.log(`Ten: ${product.$nameProduct} | Mo ta: ${product.$description} | Gia: ${product.$price}\n`);
            }
        }
        else {
            console.log('\nSan pham khong ton tai!\n');
        }
    }
    sortProductByPrice() {
        let choice = -1;
        do {
            console.log('\n--Sap xep san pham theo gia--\n');
            console.log('1. Sap xeo theo gia tang dan');
            console.log('2. Sap xep theo gia giam dan');
            console.log('0. Quay lai');
            choice = +rl.question('Nhap lua chon cua ban:');
            switch (choice) {
                case 1: {
                    this.sortUp();
                    break;
                }
                case 2: {
                    this.sortDown();
                }
            }
        } while (choice !== 0);
    }
    sortUp() {
        let products = this.productManagement.getAll();
        let arrSort = [];
        if (products.length !== 0) {
            for (let product of products) {
                arrSort.push(product);
            }
        }
        if (arrSort.length !== 0) {
            let needNextPass = true;
            for (let i = 1; i < arrSort.length && needNextPass; i++) {
                needNextPass = false;
                for (let j = arrSort.length - 1; j >= 0; j--) {
                    if (arrSort[j].$price !== undefined && arrSort[j + 1] !== undefined)
                        if (arrSort[j].$price > arrSort[j + 1].$price) {
                            let temp = arrSort[j];
                            arrSort[j] = arrSort[j + 1];
                            arrSort[j + 1] = temp;
                            needNextPass = true;
                        }
                }
                if (needNextPass == false) {
                    break;
                }
            }
            console.log('\n--Sap xep theo gia tang dan--\n');
            for (let product of arrSort) {
                console.log(`Id: ${product.$id} | Ten: ${product.$nameProduct} | Mo ta:${product.$description} | Gia: ${product.$price}`);
            }
        }
    }
    sortDown() {
        let products = this.productManagement.getAll();
        let arrSort = [];
        if (products.length !== 0) {
            for (let product of products) {
                arrSort.push(product);
            }
        }
        if (arrSort.length !== 0) {
            let needNextPass = true;
            for (let i = 1; i < arrSort.length && needNextPass; i++) {
                needNextPass = false;
                for (let j = arrSort.length - 1; j >= 0; j--) {
                    if (arrSort[j].$price !== undefined && arrSort[j + 1] !== undefined)
                        if (arrSort[j].$price < arrSort[j + 1].$price) {
                            let temp = arrSort[j];
                            arrSort[j] = arrSort[j + 1];
                            arrSort[j + 1] = temp;
                            needNextPass = true;
                        }
                }
                if (needNextPass == false) {
                    break;
                }
            }
            console.log('\n--Sap xep theo gia giam dan--\n');
            for (let product of arrSort) {
                console.log(`Id: ${product.$id} | Ten: ${product.$nameProduct} | Mo ta:${product.$description} | Gia: ${product.$price}`);
            }
        }
    }
}
exports.UserMenu = UserMenu;
