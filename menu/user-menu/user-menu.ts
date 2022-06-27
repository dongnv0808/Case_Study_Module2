import { CategoryManagement } from "../../management/category/category-management";
import { ProductManagement } from "../../management/product/product-management";
import * as rl from 'readline-sync';

export class UserMenu{
    private categoryManagement = new CategoryManagement();
    private productManagement = new ProductManagement();
    
    run(){
        let choice = -1;
        let products = this.productManagement.getAll();
        do{
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
            switch(choice){
                case 1: {
                    if(products.length !== 0){
                        for(let product of products){
                            console.log(`Id: ${product.$id} | Ten: ${product.$nameProduct} | Mo ta: ${product.$description} | Gia: ${product.$price}`)
                        }
                    }else{
                        console.log('Chua co san pham nao ton tai!')
                    }
                }
            }
        }while(choice !== 0)
    }
}