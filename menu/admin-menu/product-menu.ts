import { rawListeners } from "process";
import { IProductManagement } from "../../management/product/i-product-management";
import { ProductManagement } from "../../management/product/product-management";
import * as rl from 'readline-sync';
import { ICategoryManagement } from "../../management/category/i-category-management";
import { CategoryManagement } from "../../management/category/category-management";
import { Product } from "../../module/product";

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
            console.log('6. Sap xep san pham theo gia giam dan');
            console.log('7. Them san pham vao danh muc');
            console.log('0. Quay lai');
            choice = +rl.question("Nhap lua chon cua ban:")
            switch(choice){
                case 1: {
                    this.showAllProduct();
                    break;
                }
                case 2: {
                    this.createNewProduct();
                    break;
                }
                case 3: {
                    this.updateProduct();
                    break;
                }
                case 4: {
                    this.removeProduct();
                    break;
                }
                case 5: {
                    
                    break;
                }
                case 6: {
                    
                    break;
                }
                case 7: {
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
                            break;
                        } else {
                            for(let i = 0; i < categories.length; i++){
                                console.log(`Ma: ${categories[i].$id} | Ten: ${categories[i].$nameCategory} \n`);
                            }
                            let nameCategory = rl.question('Nhap ten danh muc muon them:');
                            let category = this.categoryManagement.findByNameCategory(nameCategory);
                            if(category == null){
                                console.log('Nhap sai ten danh muc');
                                break;
                            } else {
                                category.$products.push(product);
                                product.$category = category;
                            }
                        }
                    }
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
            console.log(`Id: ${products[i].$id} | Ten: ${products[i].$nameProduct}\n`)
        }
        let idProduct = +rl.question("Nhap id danh muc muon sua:")
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
        console.log('--Xoa san pham--');
        let idRemove = +rl.question('Nhap ma san pham muon xoa:');
        this.productMenagement.removeById(idRemove);
    }
    
}