export class User{
    private id: number = 0;
    private user: string;
    private password: string;
    private role: number = 0;
    private email: string;
    private name: string;

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
}