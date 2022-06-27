import { toNamespacedPath } from 'path';
import * as rl from 'readline-sync'
import { CategoryManagement } from '../../management/category/category-management';
import { ICategoryManagement } from '../../management/category/i-category-management';
import { Category } from '../../module/category';
enum CategoryChoice{
    SHOWALLCATEGORY = 1,
    CREATECATEGORY = 2,
    UPDATECATEGORY = 3,
    REMOVECATEGORY = 4,
    SHOWPRODUCTBYCATEGORY = 5
}
export class CategoryMenu{
    private categoryManagement: ICategoryManagement = new CategoryManagement();
    run(){
        let choice = -1;
        do{
            console.log('--Quan ly danh muc--');
            console.log('1.Hien thi danh muc');
            console.log('2.Them danh muc');
            console.log('3.Sua danh muc');
            console.log('4.Xoa danh muc');
            console.log('5.Hien thi san pham theo danh muc')
            console.log('0. Quay lai');
            choice = +rl.question('Nhap lua chon:');
            switch(choice){
                case CategoryChoice.SHOWALLCATEGORY: {
                    this.showAllCategory();
                    break;
                }
                case CategoryChoice.CREATECATEGORY: {
                    this.createCategory();
                    break;
                }
                case CategoryChoice.UPDATECATEGORY: {
                    this.updateCategory();
                    break;
                }
                case CategoryChoice.REMOVECATEGORY: {
                    this.removeCategory();
                    break;
                }
                case CategoryChoice.SHOWPRODUCTBYCATEGORY: {
                    this.showProductByCategory();
                    break;
                }
                case 0: {
                    break;
                }
            }
        }while(choice !== 0)
    }
    showAllCategory(){
        let categorys = this.categoryManagement.getAll();
        if(categorys.length == 0){
            console.log('Chua tao danh muc!\n');
        }else{
            for(let category of categorys){
                console.log(`Ma danh muc: ${category.$id} | Ten danh muc: ${category.$nameCategory}\n`);
            }
        }
    }
    inputCategory(): Category{
        let nameCategory = rl.question("Nhap ten danh muc:");
        return new Category(nameCategory)
    }
    createCategory(){
        console.log('--Tao danh muc--');
        let category = this.inputCategory()
        this.categoryManagement.createNew(category);
    }
    updateCategory(){
        console.log('--Sua danh muc--');
        let categories = this.categoryManagement.getAll();
        for(let i = 0; i < categories.length; i++){
            console.log(`Ma: ${categories[i].$id} | Ten: ${categories[i].$nameCategory}`)
        }
        let idCategory = +rl.question("Nhap id danh muc muon sua:")
        let indexCategory = this.categoryManagement.findById(idCategory);
        let category = this.categoryManagement.findByIdCategory(idCategory);
        if(indexCategory !== -1){
            if(category !== null){
                category.$id = idCategory;
                category.$nameCategory = rl.question('Nhap ten danh muc:');
                if(category.$products.length !== 0){
                    category.$products = categories[indexCategory].$products;
                }else{
                    category.$products = [];
                }
                this.categoryManagement.updateById(indexCategory, category);
                console.log('\nSua danh muc thanh cong!\n');
            }
        }else{
            console.log('Nhap sai ma danh muc!');
        }
    }
    removeCategory(){
        let categories = this.categoryManagement.getAll();
        for(let category of categories){
            console.log(`Id: ${category.$id} | Ten: ${category.$nameCategory}`);
        }
        console.log('--Xoa danh muc--');
        let idCategory = +rl.question("Nhap id danh muc muon xoa:");
        this.categoryManagement.removeById(idCategory);
        console.log('\nXoa thanh cong!\n')
    }
    showProductByCategory(){
        let categories = this.categoryManagement.getAll();
        console.log('--Hien thi san pham theo danh muc--');
        if(categories.length == 0){
            console.log('Hien chua co danh muc nao ton lai!')
        } else {
            for(let i = 0; i < categories.length; i++){
                console.log(`Ma: ${categories[i].$id} | Ten: ${categories[i].$nameCategory}\n`)
            }
            let nameCategory = rl.question('Nhap ten danh muc san pham:');
            let category = this.categoryManagement.findByNameCategory(nameCategory);
            if(category == null){
                console.log('Nhap sai ten danh muc!');
            }else{
                if(category.$products.length == 0){
                    console.log('Trong danh muc chua co san pham!');
                }else{
                    for(let i = 0; i < categories.length; i++){
                        if(categories[i].$nameCategory == nameCategory){
                            for(let j = 0; j < categories[i].$products.length; j++){
                                if(categories[i].$products[j].$category !== null){
                                    console.log(`Ma: ${categories[i].$products[j].$id}, Ten: ${categories[i].$products[j].$nameProduct}, Mo ta: ${categories[i].$products[j].$id}, Gia: ${categories[i].$products[j].$price}, Loai: ${categories[i].$products[j].$category?.$nameCategory}\n`)
                                }else{
                                    continue;
                                }
                            }
                        }else{
                            continue;
                        }
                    }
                }
            }
        }
    }
}