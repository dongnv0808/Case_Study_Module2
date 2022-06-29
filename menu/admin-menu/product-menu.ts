import { rawListeners } from "process";
import { IProductManagement } from "../../management/product/i-product-management";
import { ProductManagement } from "../../management/product/product-management";
import * as rl from 'readline-sync';
import { ICategoryManagement } from "../../management/category/i-category-management";
import { CategoryManagement } from "../../management/category/category-management";
import { Product } from "../../module/product";

enum ProductChoice{
    SHOWALLPRODUCT = 1,
    CREATEPRODUCT = 2,
    UPDATEPRODUCT = 3,
    REMOVEPRODUCT = 4,
    SEARCHPRODUCTBYNAME = 5,
    SORTBYPRICE = 6,
    ADDPRODUCTTOCATEGORY = 7
}

export class ProductMenu{
    private productMenagement: IProductManagement = new ProductManagement();
    private categoryManagement: ICategoryManagement = new CategoryManagement();
    run(){
        let choice = -1;
        do{
            console.log('--Quan ly san pham--');
            console.log('1. Hien thi danh sach san pham');
            console.log('2. Them san pham');
            console.log('3. Cap nhat san pham');
            console.log('4. Xoa san pham');
            console.log('5. Tim kiem san pham theo ten');
            console.log('6. Sap xep san pham theo gia');
            console.log('7. Them san pham vao danh muc');
            console.log('0. Quay lai');
            choice = +rl.question("Nhap lua chon cua ban:")
            switch(choice){
                case ProductChoice.SHOWALLPRODUCT: {
                    this.showAllProduct();
                    break;
                }
                case ProductChoice.CREATEPRODUCT: {
                    this.createNewProduct();
                    break;
                }
                case ProductChoice.UPDATEPRODUCT: {
                    this.updateProduct();
                    break;
                }
                case ProductChoice.REMOVEPRODUCT: {
                    this.removeProduct();
                    break;
                }
                case ProductChoice.SEARCHPRODUCTBYNAME: {
                    this.searchProductByName();
                    break;
                }
                case ProductChoice.SORTBYPRICE: {
                    this.sortByPrice();
                    break;
                }
                case ProductChoice.ADDPRODUCTTOCATEGORY: {
                    this.addProductToCategory();
                    break;
                }
                case 0: {
                    break;
                }
            }
        }while(choice !== 0)
    }
    showAllProduct(){
        console.log('--Danh sach san pham--');
        let products = this.productMenagement.getAll();
        for(let i = 0; i < products.length; i++){
            console.log(`Ma: ${products[i].$id}, Ten: ${products[i].$nameProduct}, Mo ta: ${products[i].$description}, Gia: ${products[i].$price}, Danh muc: ${products[i].$category?.$nameCategory}\n`);
        }
    }
    
    createNewProduct(){
        let product = this.inputProduct()
        this.productMenagement.createNew(product);
        console.log('\nThem thanh cong!\n')
    }
    inputProduct(): Product{
        let nameProduct = rl.question("Nhap ten san pham:");
        let descriptionProduct = rl.question("Nhap mo ta san pham:");
        let priceProduct = +rl.question("Nhap gia:");
        return new Product(nameProduct, descriptionProduct, priceProduct);
    }
    updateProduct(): void{
        let products = this.productMenagement.getAll();
        console.log('--Sua san pham--');
        for(let i = 0; i < products.length; i++){
            console.log(`Id: ${products[i].$id} | Ten: ${products[i].$nameProduct} | Mo to: ${products[i].$description} | Gia: ${products[i].$price}\n`)
        }
        let idProduct = +rl.question("Nhap id san pham muon sua:")
        let indexUpdate = this.productMenagement.findById(idProduct);
        if(indexUpdate !== -1){
            let product = this.inputProduct();
            product.$id = idProduct;
            if(products[indexUpdate].$category !== null)
            product.$category = products[indexUpdate].$category;
            this.productMenagement.updateById(idProduct, product);
            console.log('\nSua san pham thanh cong!\n');
        }
        else{
            console.log('\nNhap sai ma san pham!\n')
        }
    }
    removeProduct(): void{
        let products = this.productMenagement.getAll();
        console.log('--Xoa san pham--');
        for(let product of products){
            console.log(`\nId: ${product.$id} | Ten: ${product.$nameProduct}\n`)
        }
        let idRemove = +rl.question('Nhap ma san pham muon xoa:');
        let lengthProduct = products.length;
        this.productMenagement.removeById(idRemove);
        if(lengthProduct !== products.length){
            console.log('\nXoa thanh cong!\n');
        }else{
            console.log('\nXoa that bai!\n');
        }
    }
    
    searchProductByName(){
        console.log('\n--Tim kiem san pham theo ten--\n');
        let products = this.productMenagement.getAll();
        let arrLinearSearch = [];
        let nameProduct = rl.question('Nhap ten san pham: ');
        let flag = true;
        for(let i = 0; i < products.length; i++){
            if(products[i].$nameProduct.includes(nameProduct) == true){
                arrLinearSearch.push(products[i]);
            }
            else{
                flag = false;
            }
        }
        if(arrLinearSearch.length !== 0){
            flag = true;
        }else{
            flag = false;
        }
        if(flag !== false){
            for(let product of arrLinearSearch){
                console.log(`Id: ${product.$id} | Ten: ${product.$nameProduct} | Mo ta: ${product.$description} | Gia: ${product.$price} | ${product.$category?.$nameCategory}\n`)
                flag = true;
            }
        }else{
            console.log('\nSan pham khong ton tai!\n')
        }
    }
    sortByPrice(){
        let choice = -1;
        do{
            console.log('--Sap xep san pham theo gia--');
            console.log('1. Giam dan');
            console.log('2. Tang dan');
            console.log('0. Quay lai');
            choice = +rl.question('Nhap lua chon cua ban:');
            switch(choice){
                case 1: {
                    this.sortDown();
                    break;
                }
                case 2: {
                    this.sortUp();
                    break;
                }
                case 0: {
                    break;
                }
            }
        }while(choice !== 0)
    }
    sortUp(){
        let products = this.productMenagement.getAll();
        let arrSort: Product[] = [];
        if(products.length !== 0){
            for(let product of products){
                arrSort.push(product);
            }
        }
        if(arrSort.length !== 0){
            let needNextPass = true;
            for(let i = 1; i < arrSort.length && needNextPass; i++){
                needNextPass = false;
                for(let j = arrSort.length - 1; j >= 0; j--){
                    if(arrSort[j].$price !== undefined && arrSort[j+1] !== undefined)
                    if(arrSort[j].$price > arrSort[j+1].$price){
                        let temp = arrSort[j];
                        arrSort[j] = arrSort[j+1];
                        arrSort[j+1] = temp;
                        needNextPass = true;
                    }
                }
            }
            console.log('\n--Sap xep thoe gia tang dan--\n');
            for(let product of arrSort){
                console.log(`Id: ${product.$id} | Ten: ${product.$nameProduct} | Mo ta:${product.$description} | Gia: ${product.$price}`);
            }
        }
    }
    sortDown(){
        let products = this.productMenagement.getAll();
        let arrSort: Product[] = [];
        if(products.length !== 0){
            for(let product of products){
                arrSort.push(product);
            }
        }
        if(arrSort.length !== 0){
            let needNextPass = true;
            for(let i = 1; i < arrSort.length && needNextPass; i++){
                needNextPass = false;
                for(let j = arrSort.length - 1; j >= 0; j--){
                    if(arrSort[j].$price !== undefined && arrSort[j+1] !== undefined)
                    if(arrSort[j].$price < arrSort[j+1].$price){
                        let temp = arrSort[j];
                        arrSort[j] = arrSort[j+1];
                        arrSort[j+1] = temp;
                        needNextPass = true;
                    }
                }
                if(needNextPass == false){
                    break;
                }
            }
            console.log('\n--Sap xep theo gia giam dan--\n');
            for(let product of arrSort){
                console.log(`Id: ${product.$id} | Ten: ${product.$nameProduct} | Mo ta:${product.$description} | Gia: ${product.$price}`);
            }
        }
    }
    addProductToCategory(){
        console.log('---Thêm sản phẩm vào danh mục---');
        let categories = this.categoryManagement.getAll();
        let products = this.productMenagement.getAll();
        if(categories.length == 0){
            console.log('Hien chua co danh muc san pham nao!');
        } else {
            for(let i = 0; i < products.length; i++){
                console.log(`Ma: ${products[i].$id} | Ten: ${products[i].$nameProduct} | ${products[i].$category?.$nameCategory} \n`);
            }
            let idProduct = +rl.question('Nhap ma san pham muon them:');
            let product = this.productMenagement.findByIdProduct(idProduct);
            console.log(product);
            if(product == null){
                console.log('Nhap sai ma san pham');
            } else {
                for(let i = 0; i < categories.length; i++){
                    console.log(`Ma: ${categories[i].$id} | Ten: ${categories[i].$nameCategory} \n`);
                }
                let nameCategory = rl.question('Nhap ten danh muc muon them:');
                let category = this.categoryManagement.findByNameCategory(nameCategory);
                if(category == null){
                    console.log('Nhap sai ten danh muc');
                } else {
                    category.$products.push(product);
                    product.$category = category;
                    console.log('\nThem san pham vao danh muc thanh cong!\n')
                }
            }
        }
    }
}