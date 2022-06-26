import { Category } from "../../module/category";
import { ICategoryManagement } from "./i-category-management";

export class CategoryManagement implements ICategoryManagement{
    private static categorys: Category[] = [];
    private static id: number = 0;
    findByIdCategory(id: number): Category | null {
        let category = null;
        for(let i = 0; i < CategoryManagement.categorys.length; i++){
            if(id == CategoryManagement.categorys[i].$id){
                category = CategoryManagement.categorys[i];
                break;
            }else{
                category = null;
            }
        }
        return category;
    }
    getAll(): Category[] {
        return CategoryManagement.categorys;
    }
    createNew(t: Category): void {
        CategoryManagement.id++;
        t.$id = CategoryManagement.id;
        CategoryManagement.categorys.push(t);
    }
    updateById(id: number, t: Category): void {
        let category = this.findByIdCategory(id);
        if(category !== null){
            category = t;
        }
    }
    removeById(id: number): void {
        let indexRemove = this.findById(id);
        if(indexRemove !== -1){
            CategoryManagement.categorys.splice(indexRemove, 1);
        }else{
            console.log('Danh muc khong ton tai!');
        }
    }
    findById(id: number): number {
        let index = -1;
        for(let i = 0; i < CategoryManagement.categorys.length; i++){
            if(id == CategoryManagement.categorys[i].$id){
                index = i;
                break;
            }
        }
        return index;
    }
    findByNameCategory(name: string){
        for(let i = 0; i < CategoryManagement.categorys.length; i++){
            if(CategoryManagement.categorys[i].$nameCategory == name){
                return CategoryManagement.categorys[i];
            }
        }
        return null;
    }
}