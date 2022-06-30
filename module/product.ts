import { Category } from "./category";

export class Product{
    private id: number = 0;
    private nameProduct: string;
    private description: string;
    private price: number;
	private amount: number = 0;
	private productSold: number = 0;
	private category: Category | null = null;

	constructor($nameProduct: string, $description: string, $price: number) {
		this.nameProduct = $nameProduct;
		this.description = $description;
		this.price = $price;
	}

	public get $id(): number {
		return this.id;
	}
	public get $nameProduct(): string {
		return this.nameProduct;
	}
	public get $description(): string {
		return this.description;
	}
	public get $price(): number {
		return this.price;
	}
	public set $id(value: number ) {
		this.id = value;
	}
	public set $nameProduct(value: string) {
		this.nameProduct = value;
	}
	public set $description(value: string) {
		this.description = value;
	}
	public set $price(value: number) {
		this.price = value;
	}
	public get $category(): Category | null{
		return this.category;
	}
	public set $category(value: Category | null) {
		this.category = value;
	}
	public get $productSold(): number  {
		return this.productSold;
	}
	public set $productSold(value: number ) {
		this.productSold = value;
	}

	public get $amount(): number  {
		return this.amount;
	}

	public set $amount(value: number ) {
		this.amount = value;
	}

}