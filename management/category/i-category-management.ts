
import { Category } from "../../module/category";
import { IManagement } from "../i-management";

export interface ICategoryManagement extends IManagement<Category>{
    findByIdCategory(id: number): Category | null;
    findByNameCategory(name: string): Category | null;
}