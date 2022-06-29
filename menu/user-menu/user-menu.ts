import { ProductManagement } from "../../management/product/product-management";
import * as rl from 'readline-sync';
import { Product } from "../../module/product";
import { CategoryManagement } from "../../management/category/category-management";
import { UserManagement } from "../../management/user/user-management";
import { User } from "../../module/user";
import { Cart } from "../../module/cart";
enum ChoiceMenuUser{
    SHOWALLPRODUCT = 1,
    FILTERPRODUCTSBYPRICE = 2,
    SEARCHPRODUCTSBYNAME = 3,
    SORTPRODUCTSBYPRICE = 4,
    CART = 5,
    SHOWNUMBEROFPRODUCTSBYCATEGORY = 6,
    SHOWHOSTSELLINGPRODUCT = 7
}
export class UserMenu{
    private productManagement = new ProductManagement();
    private categoryManagement = new CategoryManagement();
    private products: Product[] = [];
    run(currentUser: User){
        let choice = -1;
        
        do{
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
            switch(choice){
                case ChoiceMenuUser.SHOWALLPRODUCT: {
                    this.showAllProduct(currentUser);
                    break;
                }
                case ChoiceMenuUser.FILTERPRODUCTSBYPRICE: {
                    this.filterProductsByPrice(currentUser);
                    break;
                }
                case ChoiceMenuUser.SEARCHPRODUCTSBYNAME: {
                    this.searchProductByName(currentUser);
                    break;
                }
                case ChoiceMenuUser.SORTPRODUCTSBYPRICE: {
                    this.sortProductByPrice(currentUser);
                    break;
                }
                case ChoiceMenuUser.CART: {
                    this.cart(currentUser);
                    break;
                }
                case ChoiceMenuUser.SHOWNUMBEROFPRODUCTSBYCATEGORY: {
                    this.showNumberOfProductByCategory(currentUser);
                    break;
                }
                case ChoiceMenuUser.SHOWHOSTSELLINGPRODUCT: {
                    
                    break;
                }
            }
        }while(choice !== 0)
    }
    showAllProduct(currentUser: User){
        let products = this.productManagement.getAll();
        if(products.length !== 0){
            for(let product of products){
                console.log(`Id: ${product.$id} | Ten: ${product.$nameProduct} | Mo ta: ${product.$description} | Gia: ${product.$price}`)
            }
        }else{
            console.log('Chua co san pham nao ton tai!')
        }
        this.addToCart(currentUser);
    }
    filterProductsByPrice(currentUser: User){
        let choice = -1;
        let products = this.productManagement.getAll();
        do{
            console.log('--Loc danh sach san pham theo khoang gia--');
            console.log('1. Duoi 2 trieu');
            console.log('2. 2 - 4 trieu');
            console.log('3. 4 - 7 trieu');
            console.log('4. 7 - 13 trieu');
            console.log('5. Tren 13 trieu');
            console.log('6. Them san pham vao gio');
            console.log('0. Quay lai');
            choice = +rl.question('Nhap lua chon cua ban:')
            switch(choice){
                case 1: {
                    console.log('--Khoang gia duoi 2 trieu--\n');
                    for(let i = 0; i < products.length; i++){
                        if(products[i].$price <= 2000000){
                            console.log(`${i+1} Ten: ${products[i].$nameProduct} | Mo ta: ${products[i].$description} | Gia: ${products[i].$price}`);
                        }
                    }    
                break;
                }
                case 2: {
                    console.log('--Khoang gia 2 - 4 trieu--\n');
                    for(let i = 0; i < products.length; i++){
                        if(products[i].$price > 2000000 && products[i].$price <= 4000000){
                            console.log(`${i+1} Ten: ${products[i].$nameProduct} | Mo ta: ${products[i].$description} | Gia: ${products[i].$price}`);
                        }
                    }    
                break;
                }
                case 3: {
                    console.log('--Khoang gia 4 - 7 trieu--\n');
                    for(let i = 0; i < products.length; i++){
                        if(products[i].$price > 4000000 && products[i].$price <= 7000000){
                            console.log(`${i+1} Ten: ${products[i].$nameProduct} | Mo ta: ${products[i].$description} | Gia: ${products[i].$price}`);
                        }
                    }    
                break;
                }
                case 4: {
                    console.log('--Khoang gia 7 - 13 trieu--\n');
                    for(let i = 0; i < products.length; i++){
                        if(products[i].$price > 7000000 && products[i].$price <= 13000000){
                            console.log(`${i+1} Ten: ${products[i].$nameProduct} | Mo ta: ${products[i].$description} | Gia: ${products[i].$price}`);
                        }
                    }    
                break;
                }
                case 5: {
                    console.log('--Khoang gia tren 13 trieu--\n');
                    for(let i = 0; i < products.length; i++){
                        if(products[i].$price > 13000000){
                            console.log(`${i+1} Ten: ${products[i].$nameProduct} | Mo ta: ${products[i].$description} | Gia: ${products[i].$price}`);
                        }
                    }    
                break;
                }
                case 6: {
                    this.addToCart(currentUser);
                }
            }
        }while(choice !== 0)
    }
    searchProductByName(currentUser: User){
        let products = this.productManagement.getAll();
        let arrSearch = [];
        let flag = true;
        let nameProduct = rl.question('Nhap ten san pham: ');
        for(let i = 0; i < products.length; i++){
            if(products[i].$nameProduct.includes(nameProduct) == true){
                arrSearch.push(products[i]);
                flag = true;
            }
        }
        if(arrSearch.length == 0){
            flag = false;
        }
        if(flag == true){
            for(let product of arrSearch){
                console.log(`Ten: ${product.$nameProduct} | Mo ta: ${product.$description} | Gia: ${product.$price}\n`);
            }
            this.addToCart(currentUser)
        }else{
            console.log('\nSan pham khong ton tai!\n')
        }
    }
    sortProductByPrice(currentUser: User){
        let choice = -1;
        do{
            console.log('\n--Sap xep san pham theo gia--\n');
            console.log('1. Sap xeo theo gia tang dan');
            console.log('2. Sap xep theo gia giam dan');
            console.log('0. Quay lai');
            choice = +rl.question('Nhap lua chon cua ban:')
            switch(choice){
                case 1: {
                    this.sortUp();
                    this.addToCart(currentUser)
                    break;
                }
                case 2: {
                    this.sortDown();
                    this.addToCart(currentUser)
                    break;
                }
            }
        }while(choice !== 0)
    }
    sortUp(){
        let products = this.productManagement.getAll();
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
                if(needNextPass == false){
                    break;
                }
            }
            console.log('\n--Sap xep theo gia tang dan--\n');
            for(let product of arrSort){
                console.log(`Id: ${product.$id} | Ten: ${product.$nameProduct} | Mo ta:${product.$description} | Gia: ${product.$price}`);
            }
        }
    }
    sortDown(){
        let products = this.productManagement.getAll();
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
    addToCart(currentUser: User){
        let choice = -1;
        let cart = currentUser.getAll();
        do{
            console.log('\n1. Them vao gio hang.');
            console.log('0. Quay lai');
            choice = +rl.question('Nhap lua chon cua ban:')
            switch(choice){
                case 1: {
                    let idProduct = +rl.question('Nhap ma san pham muon mua:');
                    let product = this.productManagement.findByIdProduct(idProduct);
                    if(!product){
                        console.log('\nNhap sai ma san pham!\n');
                    }else{
                        let amount = +rl.question('Nhap so luong muon mua:');
                        if(currentUser.findById(idProduct) !== -1){
                            cart.$amount += amount;
                        }else{
                            currentUser.addToCart(product, amount);
                        }
                    }
                    break;
                }
            }
        }while(choice !== 0)
    }
    cart(currentUser: User){
        let choice = -1;
        let cart = currentUser.getAll();
        do{
            console.log('\n--Gio hang--\n');
            console.log('\n1. Hien thi tat ca san pham trong gio hang.');
            console.log('2. Sua san pham trong gio hang.');
            console.log('3. Xoa san pham khoi gio hang.');
            console.log('0. Quay lai.');
            choice = +rl.question('Nhap lua chon cua ban:');
            switch(choice){
                case 1: {
                    let totalPrice = 0;
                    for(let i = 0; i < cart.$products.length; i++){
                        console.log(`Id: ${cart.$products[i].$id} | Ten: ${cart.$products[i].$nameProduct} | So luong: ${cart.$amount} | Gia: ${cart.$products[i].$price * cart.$amount}`);
                        totalPrice += cart.$products[i].$price * cart.$amount;
                    }
                    console.log(`\nTong tien: ${totalPrice}\n`);
                    break;
                }
                case 2: {
                    console.log('\n--Sua so luong san pham trong gio hang\n');
                    let idProduct = +rl.question('Nhap Id san pham muon sua:');
                    let product = currentUser.findProductById(idProduct);
                    if(product){
                        cart.$amount = +rl.question('Nhap so luong muon sua:');
                        currentUser.updateProduct(idProduct, cart.$amount);
                        console.log('\nSua thanh cong!\n');
                    }else{
                        console.log('\nNhap sai ma san pham!\n');
                    }
                    break;
                }
                case 3: {
                    console.log('--Xoa san pham trong gio hang--');
                    let idProduct = +rl.question('Nhap Id san pham muon xoa:');
                    let isvalidId = true;
                    for(let i = 0; i < cart.$products.length; i++){
                        if(cart.$products[i].$id == idProduct){
                            currentUser.removeProduct(idProduct);
                            isvalidId = true;
                            break;
                        }
                        else{
                            isvalidId = false;
                        }
                    }
                    if(isvalidId == true){
                        console.log('\nXoa thanh cong\n');
                    }else{
                        console.log('\nXoa that bai\n');
                    }
                    break;
                }
            }
        }while(choice !== 0)
    }
    showNumberOfProductByCategory(currentUser: User){
        let categorys = this.categoryManagement.getAll();
        console.log('--\nHien thi so luong san pham theo danh muc--\n');
        for(let category of categorys){
            console.log(`Ten danh muc: ${category.$nameCategory}`)
        }
        let nameCategory = rl.question('Nhap ten danh muc muon hien thi:');
        let category = this.categoryManagement.findByNameCategory(nameCategory);
        if(!category){
            console.log('\nKhong tim thay danh muc!\n');
        }
        else{
            if(category.$products.length == 0){
                console.log('\nKhong co san pham nao trong danh muc!\n');
            }else{
                console.log(`\nCo ${category.$products.length} san pham trong danh muc\n`);
                console.log(`--Danh sach san pham trong danh muc ${category.$nameCategory}--`)
                for(let product of category.$products){
                    console.log(`Ten: ${product.$nameProduct} | Mo ta: ${product.$description} | Gia: ${product.$price}`)
                    this.addToCart(currentUser);
                }
            }
        }
    }
}