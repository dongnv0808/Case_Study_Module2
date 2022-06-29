import { Cart } from "./cart";
import { Product } from "./product";

export class User{
    private id: number = 0;
    private user: string;
    private password: string;
    private role: number = 0;
    private email: string;
    private name: string;
	private cart = new Cart();

	constructor($user: string, $password: string, $email: string, $name: string) {
		this.user = $user;
		this.password = $password;
		this.email = $email;
		this.name = $name;
	}
	public get $id(): number {
		return this.id;
	}
	public get $user(): string {
		return this.user;
	}
	public get $password(): string {
		return this.password;
	}
	public get $role(): number {
		return this.role;
	}
	public get $email(): string {
		return this.email;
	}
	public get $name(): string {
		return this.name;
	}
	public set $id(value: number) {
		this.id = value;
	}
	public set $user(value: string) {
		this.user = value;
	}
	public set $password(value: string) {
		this.password = value;
	}
	public set $role(value: number) {
		this.role = value;
	}
	public set $email(value: string) {
		this.email = value;
	}
	public set $name(value: string) {
		this.name = value;
	}
	getAll(){
		return this.cart;
	}
	addToCart(product: Product, amount: number): void{
		this.cart.$products.push(product);
		this.cart.$amount = amount;
	}
	updateProduct(id: number, amount: number): void{
		let indexUpdate = this.findById(id);
		if(indexUpdate !== -1){
			this.cart.$amount = amount;
		}
	}
	removeProduct(id: number): void{
		let indexRemove = this.findById(id);
		this.cart.$products.splice(indexRemove, 1);
	}
	findById(id: number): number{
		let index = -1;
		for(let i = 0; i< this.cart.$products.length; i++){
			if(this.cart.$products[i].$id == id){
				index = i;
			}
		}
		return index;
	}
	findProductById(id: number): Product | null{
		for(let i = 0; i < this.cart.$products.length; i++){
			if(this.cart.$products[i].$id == id){
				return this.cart.$products[i];
			}
		}
		return null;
	}
}