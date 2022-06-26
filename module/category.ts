import { Product } from "./product";

export class Category{
    private id: number = 0;
	private nameCategory: string;
	private products: Product[] = [];
	constructor($nameCategory: string) {
		this.nameCategory = $nameCategory;
	}
	public get $id(): number  {
		return this.id;
	}
	public get $nameCategory(): string {
		return this.nameCategory;
	}
	public set $id(value: number ) {
		this.id = value;
	}
	public set $nameCategory(value: string) {
		this.nameCategory = value;
	}
	public get $products(): Product[]  {
		return this.products;
	}
	public set $products(value: Product[] ) {
		this.products = value;
	}
}