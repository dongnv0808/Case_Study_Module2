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
const rl = __importStar(require("readline-sync"));
const product_management_1 = require("../../management/product/product-management");
const category_management_1 = require("../../management/category/category-management");
const e_user_menu_1 = require("../../module/e-user-menu");
class UserMenu {
    constructor() {
        this.productManagement = new product_management_1.ProductManagement();
        this.categoryManagement = new category_management_1.CategoryManagement();
    }
    run(currentUser) {
        let choice = -1;
        do {
            console.log('\n--Menu user--\n');
            console.log('1. Hien thi tat ca san pham');
            console.log('2. Loc danh sach san pham theo khoang gia');
            console.log('3. Tim kiem san pham theo ten');
            console.log('4. Sap xep san pham theo gia');
            console.log('5. Gio hang');
            console.log('6. Thong ke so luong san pham theo danh muc');
            console.log('7. Hien thi san pham dang ban chay');
            console.log('0. Dang xuat');
            choice = +rl.question('Nhap lua chon cua ban:');
            switch (choice) {
                case e_user_menu_1.ChoiceMenuUser.SHOWALLPRODUCT: {
                    this.showAllProduct(currentUser);
                    break;
                }
                case e_user_menu_1.ChoiceMenuUser.FILTERPRODUCTSBYPRICE: {
                    this.filterProductsByPrice(currentUser);
                    break;
                }
                case e_user_menu_1.ChoiceMenuUser.SEARCHPRODUCTSBYNAME: {
                    this.searchProductByName(currentUser);
                    break;
                }
                case e_user_menu_1.ChoiceMenuUser.SORTPRODUCTSBYPRICE: {
                    this.sortProductByPrice(currentUser);
                    break;
                }
                case e_user_menu_1.ChoiceMenuUser.CART: {
                    this.cart(currentUser);
                    break;
                }
                case e_user_menu_1.ChoiceMenuUser.SHOWNUMBEROFPRODUCTSBYCATEGORY: {
                    this.showNumberOfProductByCategory(currentUser);
                    break;
                }
                case e_user_menu_1.ChoiceMenuUser.SHOWBESTSELL: {
                    this.showBestSell();
                    break;
                }
            }
        } while (choice !== 0);
    }
    showAllProduct(currentUser) {
        let products = this.productManagement.getAll();
        if (products.length !== 0) {
            for (let product of products) {
                console.log(`Id: ${product.$id} | Ten: ${product.$nameProduct} | Mo ta: ${product.$description} | Gia: ${product.$price}`);
            }
        }
        else {
            console.log('Chua co san pham nao ton tai!');
        }
        this.addToCart(currentUser);
    }
    filterProductsByPrice(currentUser) {
        let choice = -1;
        let products = this.productManagement.getAll();
        do {
            console.log('--Loc danh sach san pham theo khoang gia--');
            console.log('1. Duoi 2 trieu');
            console.log('2. 2 - 4 trieu');
            console.log('3. 4 - 7 trieu');
            console.log('4. 7 - 13 trieu');
            console.log('5. Tren 13 trieu');
            console.log('6. Them san pham vao gio');
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
                case 6: {
                    this.addToCart(currentUser);
                }
            }
        } while (choice !== 0);
    }
    searchProductByName(currentUser) {
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
            this.addToCart(currentUser);
        }
        else {
            console.log('\nSan pham khong ton tai!\n');
        }
    }
    sortProductByPrice(currentUser) {
        let choice = -1;
        do {
            console.log('\n--Sap xep san pham theo gia--\n');
            console.log('1. Sap xeo theo gia tang dan');
            console.log('2. Sap xep theo gia giam dan');
            console.log('0. Quay lai');
            choice = +rl.question('Nhap lua chon cua ban:');
            switch (choice) {
                case e_user_menu_1.ChoiceSort.SORTUP: {
                    this.sortUp();
                    this.addToCart(currentUser);
                    break;
                }
                case e_user_menu_1.ChoiceSort.SORTDOWN: {
                    this.sortDown();
                    this.addToCart(currentUser);
                    break;
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
    addToCart(currentUser) {
        let choice = -1;
        let cart = currentUser.getAll();
        do {
            console.log('\n1. Them vao gio hang.');
            console.log('0. Quay lai');
            choice = +rl.question('Nhap lua chon cua ban:');
            switch (choice) {
                case 1: {
                    let idProduct = +rl.question('Nhap ma san pham muon mua:');
                    let product = this.productManagement.findByIdProduct(idProduct);
                    if (!product) {
                        console.log('\nNhap sai ma san pham!\n');
                    }
                    else {
                        let amount = +rl.question('Nhap so luong muon mua:');
                        if (currentUser.findByIdProductInCart(idProduct) !== -1) {
                            product.$amount += amount;
                            console.log('\nThem thanh cong!\n');
                        }
                        else {
                            product.$amount = amount;
                            currentUser.addToCart(product);
                            console.log('\nThem thanh cong!\n');
                        }
                    }
                    break;
                }
            }
        } while (choice !== 0);
    }
    cart(currentUser) {
        let choice = -1;
        do {
            console.log('\n--Gio hang--\n');
            console.log('\n1. Hien thi tat ca san pham trong gio hang.');
            console.log('2. Sua san pham trong gio hang.');
            console.log('3. Xoa san pham khoi gio hang.');
            console.log('4. Thanh toan');
            console.log('0. Quay lai.');
            choice = +rl.question('Nhap lua chon cua ban:');
            switch (choice) {
                case e_user_menu_1.ChoiceCart.SHOWALLPRODUCTINCART: {
                    this.showAllProductInCart(currentUser);
                    break;
                }
                case e_user_menu_1.ChoiceCart.UPDATEAMOUNT: {
                    this.updateAmount(currentUser);
                    break;
                }
                case e_user_menu_1.ChoiceCart.REMOVEPRODUCTFROMCART: {
                    this.removeProductFromCart(currentUser);
                    break;
                }
                case e_user_menu_1.ChoiceCart.PAY: {
                    this.pay(currentUser);
                }
            }
        } while (choice !== 0);
    }
    showNumberOfProductByCategory(currentUser) {
        let categorys = this.categoryManagement.getAll();
        console.log('--\nHien thi so luong san pham theo danh muc--\n');
        for (let category of categorys) {
            console.log(`Ten danh muc: ${category.$nameCategory}`);
        }
        let nameCategory = rl.question('Nhap ten danh muc muon hien thi:');
        let category = this.categoryManagement.findByNameCategory(nameCategory);
        if (!category) {
            console.log('\nKhong tim thay danh muc!\n');
        }
        else {
            if (category.$products.length == 0) {
                console.log('\nKhong co san pham nao trong danh muc!\n');
            }
            else {
                console.log(`\nCo ${category.$products.length} san pham trong danh muc\n`);
                console.log(`--Danh sach san pham trong danh muc ${category.$nameCategory}--`);
                for (let product of category.$products) {
                    console.log(`Ten: ${product.$nameProduct} | Mo ta: ${product.$description} | Gia: ${product.$price}`);
                    this.addToCart(currentUser);
                }
            }
        }
    }
    showAllProductInCart(currentUser) {
        let cart = currentUser.getAll();
        for (let i = 0; i < cart.length; i++) {
            console.log(`Id: ${i + 1} | Ten: ${cart[i].$nameProduct} | So luong: ${cart[i].$amount} | Gia: ${cart[i].$price * cart[i].$amount}`);
        }
        console.log(`\nTong tien: ${currentUser.getTotalPriceInCart()}\n`);
    }
    removeProductFromCart(currentUser) {
        let cart = currentUser.getAll();
        let cartLength = cart.length;
        console.log('--Xoa san pham trong gio hang--');
        let idProduct = +rl.question('Nhap Id san pham muon xoa:');
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].$id == idProduct) {
                currentUser.removeToCart(idProduct);
                break;
            }
        }
        if (cartLength !== cart.length) {
            console.log('\nXoa thanh cong\n');
        }
        else {
            console.log('\nXoa that bai\n');
        }
    }
    updateAmount(currentUser) {
        let cart = currentUser.getAll();
        console.log('\n--Sua so luong san pham trong gio hang\n');
        let indexProduct = +rl.question('Nhap Id san pham muon sua:');
        let product = currentUser.findByIndexProductInCart(indexProduct + 1);
        if (product) {
            let amount = +rl.question('Nhap so luong muon sua:');
            product.$amount = amount;
            currentUser.updateToCart(indexProduct, product);
            console.log('\nSua thanh cong!\n');
        }
        else {
            console.log('\nNhap sai ma san pham!\n');
        }
    }
    pay(currentUser) {
        let cart = currentUser.getAll();
        let nameUser = '';
        let addressUser = '';
        let phoneNumber = '';
        do {
            console.log('Khong duoc de trong ten, dia chi hoac so dien thoai');
            nameUser = rl.question('Nhap ten:');
            addressUser = rl.question('Nhap dia chi:');
            phoneNumber = rl.question('Nhap so dien thoai:');
        } while (nameUser == '' || addressUser == '' || phoneNumber == '');
        console.log(`Xin chao ${nameUser}\nDon hang se duoc giao toi dia chi: ${addressUser}\nSo dien thoai: ${phoneNumber}`);
        for (let i = 0; i < cart.length; i++) {
            cart[i].$productSold += cart[i].$amount;
        }
    }
    showBestSell() {
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
                    if (arrSort[j].$productSold !== undefined && arrSort[j + 1] !== undefined)
                        if (arrSort[j].$productSold < arrSort[j + 1].$productSold) {
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
            console.log('\n--San pham ban chay--\n');
            for (let product of arrSort) {
                console.log(`Id: ${product.$id} | Ten: ${product.$nameProduct} | Mo ta:${product.$description} | Gia: ${product.$price} | Da ban: ${product.$productSold}`);
            }
        }
    }
}
exports.UserMenu = UserMenu;
