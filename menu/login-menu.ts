import { UserManagement } from "../management/user/user-management";
import * as rl from 'readline-sync'
import { User } from "../module/user";
import { Role } from "../module/e-user";
import { AdminMenu } from "./admin-menu/admin-menu";
import { UserMenu } from "./user-menu/user-menu";
enum LoginChoice{
    LOGIN = 1,
    REGISTER = 2
}
export class LoginMenu{
    private userManagement = new UserManagement();
    private adminMenu = new AdminMenu();
    private userMenu = new UserMenu();
    inputUser(): User{
        let usernameRegex: RegExp = /^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/
        let username = this.inputUserName(usernameRegex);
        let passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/g;
        let password = this.inputPassword(passwordRegex);
        this.inputComfirmPassword(password);
        let emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        let email = this.inputEmail(emailRegex);
        let name = rl.question("Ten:");
        return new User(username, password, email, name);
    }
    inputUserName(usernameRegex: RegExp): string{
        let user = '';
        let isValidUser = true;
        do{
            user = rl.question("Username:");
            let currentUser = this.userManagement.findByUser(user)
            if(currentUser){
                console.log("User da ton tai!");
                isValidUser = false;
            }else if(user == "") {
                console.log("Khong duoc de trong Username");
                isValidUser = false;
            }else if(!usernameRegex.test(user)) {
                console.log("Tai khoan khong hop le")
                isValidUser = false;
            }else{
                isValidUser = true;
            }
        }while(!isValidUser)
        return user;
    }
    inputPassword(passwordRegex: RegExp): string{
        let password = '';
        let isValidPassword = true;
        do{
            password = rl.question("Nhap mat khau it nhat 1 thuong, hoa, ky tu:");
            if(!passwordRegex.test(password)){
                console.log("Mat khau khong hop le");
                isValidPassword = false;
            }else{
                isValidPassword = true;
            }
        }while(!isValidPassword);
        return password;
    }
    inputComfirmPassword(password: string): void{
        let comfirmPassword = '';
        do{
            comfirmPassword = rl.question("Nhap lai password:");
            if(comfirmPassword != password){
                console.log("Mat khau khong khop");
            }
        }while(comfirmPassword != password)
    }
    inputEmail(emailRegex: RegExp): string{
        let email = '';
        let isValidEmail = false;
        do{
            email = rl.question('Nhap email:');
            if(this.userManagement.findByEmail(email)){
                console.log('Email da ton tai');
                isValidEmail = false;
            }else{
                if(emailRegex.test(email)){
                    isValidEmail = true;
                }else{
                    console.log('Khong dung kieu du lieu!');
                    isValidEmail = false;
                }
            }
        }while(!isValidEmail)
        return email;
    }
    run(){
        let choice = -1;
        do{
            console.log("--Quan ly san pham--");
            console.log("1. Dang nhap");
            console.log("2. Dang ky");
            console.log("0. Thoat");
            choice = +rl.question('Nhap lua chon:');
            switch(choice){
                case LoginChoice.LOGIN: {
                    console.log("Dang nhap")
                    this.formLogin();
                    break;
                }
                case LoginChoice.REGISTER: {
                    console.log("--Dang ky tai khoan--")
                    this.formRegister();
                    break;
                }
                case 0: {
                    break;
                }
            }
        }while(choice !== 0)
    }
    formRegister(){
        let user = this.inputUser();
        this.userManagement.createNew(user);
        console.log("Dang ky thanh cong!");
    }
    formLogin(){
        let currentUser = null;
        let isLogin = true;
        do{
            let username = rl.question("Nhap tai khoan:");
            let password = rl.question("Nhap mat khau:");
            currentUser = this.userManagement.loginUser(username,password);
            if(!currentUser){
                console.log("Tai khoan hoac mat khau sai");
                isLogin = false;
            }else{
                isLogin = true;
            }
        }while(!isLogin)
        if(currentUser !== null){
            if(currentUser?.$role == Role.ADMIN){
                this.adminMenu.run();
            }else{
                this.userMenu.run();
            }
        }
    }
}

