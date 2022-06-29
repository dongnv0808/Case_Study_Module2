import { IManagement } from "../management/i-management";
import { Product } from "./product";

export class Cart{
    private products: Product[] = [];
	private amount: number = 0;
	private totalPrice: number = 0;
	public get $products(): Product[]  {
		return this.products;
	}
	public set $products(value: Product[] ) {
		this.products = value;
	}
	public get $totalPrice(): number  {
		for(let i = 0; i < this.products.length; i++){
			this.totalPrice += this.products[i].$price;
		}
		return this.totalPrice;
	}
	public set $totalPrice(value: number ) {
		this.totalPrice = value;
	}
	public get $amount(): number  {
		return this.amount;
	}
	public set $amount(value: number ) {
		this.amount = value;
	}

}