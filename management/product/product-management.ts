import { Product } from "../../module/product";
import { IProductManagement } from "./i-product-management";

export class ProductManagement implements IProductManagement{
    private static products: Product[] = [];
    private static id: number = 0;
    
    getAll(): Product[]{
        return ProductManagement.products;
    }
    createNew(product: Product): void{
        ProductManagement.id++;
        product.$id = ProductManagement.id;
        ProductManagement.products.push(product);
    }
    updateById(index: number, product: Product): void{
        let indexUpdate = this.findById(index);
        if(indexUpdate !== -1){
            ProductManagement.products[indexUpdate] = product;
        }
    }
    removeById(index: number): void{
        let indexRemove = this.findById(index);
        if(indexRemove !== -1){
            ProductManagement.products.splice(indexRemove, 1);
        }
    }
    findById(id: number): number{
        let index = -1;
        for(let i = 0; i < ProductManagement.products.length; i++){
            if(ProductManagement.products[i].$id == id){
                index = i;
            }
        }
        return index;
    }
    findByIdProduct(id: number){
        for(let i = 0; i < ProductManagement.products.length; i++){
            if(ProductManagement.products[i].$id == id){
                return ProductManagement.products[i];
            }
        }
        return null
    }
    findByNameProduct(name: string){
        for(let i = 0; i < ProductManagement.products.length; i++){
            if(ProductManagement.products[i].$nameProduct == name){
                return ProductManagement.products[i];
            }
        }
        return null
    }
}