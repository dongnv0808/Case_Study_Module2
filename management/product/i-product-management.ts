import { Product } from "../../module/product";
import { IManagement } from "../i-management";

export interface IProductManagement extends IManagement<Product>{
    findByIdProduct(id: number): Product | null;
}