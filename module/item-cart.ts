import { Product } from "./product";

export class ItemCart{
    private products: Product[] = [];
    private amount: number = 0;
	public get $products(): Product[]  {
		return this.products;
	}
	public get $amount(): number  {
		return this.amount;
	}
	public set $products(value: Product[] ) {
		this.products = value;
	}
	public set $amount(value: number ) {
		this.amount = value;
	}
}