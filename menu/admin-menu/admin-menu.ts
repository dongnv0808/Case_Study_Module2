import { ProductManagement } from "../../management/product/product-management";
import * as rl from "readline-sync";
import { CategoryMenu } from "./category-menu";
import { ProductMenu } from "./product-menu";

export class AdminMenu{
    private categoryMenu = new CategoryMenu();
    private productMenu = new ProductMenu();
    run(){
        let choice = -1;
        do{
            console.log("--Menu Quan Ly--");
            console.log("1. Quan ly danh muc");
            console.log("2. Quan ly san pham");
            console.log("0. Dang xuat");
            choice = +rl.question("Nhap lua chon cua ban:");
            switch(choice){
                case 1: {
                    this.categoryMenu.run();
                    break;
                }
                case 2: {
                    this.productMenu.run();
                    break;
                }
                case 0: {
                    break;
                }
            }
        }while(choice !== 0)
    }
}