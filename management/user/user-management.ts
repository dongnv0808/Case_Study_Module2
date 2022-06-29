import { inflateRaw } from "zlib";
import { Cart } from "../../module/cart";
import { Role } from "../../module/e-user";
import { Product } from "../../module/product";
import { User } from "../../module/user";
import { IManagement } from "../i-management";
import { IUserManagement } from "./i-user-management";

export class UserManagement implements IUserManagement{
    private static users: User[] = [];
    private static id: number = 1;
    constructor(){
        let admin = new User('admin', '123456', 'admin@gmail.com', 'ADMIN');
        admin.$id = UserManagement.id;
        admin.$role = Role.ADMIN;
        UserManagement.users.push(admin);
    }
    getAll(): User[]{
        return UserManagement.users;
    }
    createNew(user: User): void{
        UserManagement.id++;
        user.$id = UserManagement.id;
        user.$role = Role.USER;
        UserManagement.users.push(user);
    }
    updateById(index: number, user: User): void{
        let indexUpdate = this.findById(index);
        if(indexUpdate !== -1){
            UserManagement.users[indexUpdate] = user;
        }
    }
    removeById(index: number): void{
        let indexRemove = this.findById(index);
        UserManagement.users.splice(indexRemove, 1);
    }
    loginUser(username: string, password: string): User | null {
        for(let user of UserManagement.users){
            if(user.$user == username && user.$password == password){
                console.log("Dang nhap thanh cong");
                return user;
            }
        }
        return null;
    }
    findById(id: number): number{
        let index = -1;
        for(let i = 0; i < UserManagement.users.length; i++){
            if(UserManagement.users[i].$id == id){
                return index = i;
            }
        }
        return index;
    }
    findByUser(userName: string): User | null{
        for(const user of UserManagement.users){
            if(userName == user.$user){
                return user;
            }
        }
        return null;
    }
    findByEmail(email: string): User | null{
        for(const user of UserManagement.users){
            if(email == user.$email){
                return user;
            }
        }
        return null;
    }
}