import { IManagement } from "../management/i-management";
import { Product } from "./product";

export class Cart{
	private products: Product[] = [];
	private totalPrice: number = 0;

	public get $products(): Product[]  {
		return this.products;
	}

	public get $totalPrice(): number  {
		for(let product of this.products){
			this.totalPrice += product.$amount * product.$price
		}
		return this.totalPrice;
	}

	public set $products(value: Product[] ) {
		this.products = value;
	}

	public set $totalPrice(value: number ) {
		this.totalPrice = value;
	}

	getAllProductInCart(): Product[]{
		return this.products;
	}
	
	addToCart(product: Product): void{
		this.products.push(product);
	}

	updateProductInCart(id: number, product: Product){
		let indexUpdate = this.findById(id);
		if(indexUpdate !== -1){
			this.products[indexUpdate] = product;
		}
	}

	removeProductInCart(id: number): void{
		let indexRemove = this.findById(id);
		if(indexRemove !== -1){
			this.products.splice(indexRemove, 1);
		}
	}

	findById(id: number): number{
		let index = -1;
		for(let i = 0; i < this.products.length; i++){
			if(this.products[i].$id == id){
				index = i;
			}
		}
		return index;
	}
}