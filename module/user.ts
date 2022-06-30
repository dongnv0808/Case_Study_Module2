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
		return this.cart.getAllProductInCart();
	}
	addToCart(product: Product): void{
		this.cart.addToCart(product)
	}
	
	updateToCart(id: number, product: Product): void{
		this.cart.updateProductInCart(id, product);
	}

	removeToCart(id: number): void{
		this.cart.removeProductInCart(id);
	}

	findByIdProductInCart(id: number): number{
		let index = this.cart.findById(id);
		return index;
	}
	getTotalPriceInCart(): number{
		return this.cart.$totalPrice;
	}
	findByIndexProductInCart(index: number): Product{
		return this.cart.$products[index];
	}
}