"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginMenu = void 0;
const user_management_1 = require("../management/user/user-management");
const rl = __importStar(require("readline-sync"));
const user_1 = require("../module/user");
const e_user_1 = require("../module/e-user");
const admin_menu_1 = require("./admin-menu/admin-menu");
var LoginChoice;
(function (LoginChoice) {
    LoginChoice[LoginChoice["LOGIN"] = 1] = "LOGIN";
    LoginChoice[LoginChoice["REGISTER"] = 2] = "REGISTER";
})(LoginChoice || (LoginChoice = {}));
class LoginMenu {
    constructor() {
        this.userManagement = new user_management_1.UserManagement();
        this.adminMenu = new admin_menu_1.AdminMenu();
    }
    inputUser() {
        let usernameRegex = /^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/;
        let username = this.inputUserName(usernameRegex);
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/g;
        let password = this.inputPassword(passwordRegex);
        this.inputComfirmPassword(password);
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        let email = this.inputEmail(emailRegex);
        let name = rl.question("Ten:");
        return new user_1.User(username, password, email, name);
    }
    inputUserName(usernameRegex) {
        let user = '';
        let isValidUser = true;
        do {
            user = rl.question("Username:");
            let currentUser = this.userManagement.findByUser(user);
            if (currentUser) {
                console.log("User da ton tai!");
                isValidUser = false;
            }
            else if (user == "") {
                console.log("Khong duoc de trong Username");
                isValidUser = false;
            }
            else if (!usernameRegex.test(user)) {
                console.log("Tai khoan khong hop le");
                isValidUser = false;
            }
            else {
                isValidUser = true;
            }
        } while (!isValidUser);
        return user;
    }
    inputPassword(passwordRegex) {
        let password = '';
        let isValidPassword = true;
        do {
            password = rl.question("Nhap mat khau it nhat 1 thuong, hoa, ky tu:");
            if (!passwordRegex.test(password)) {
                console.log("Mat khau khong hop le");
                isValidPassword = false;
            }
            else {
                isValidPassword = true;
            }
        } while (!isValidPassword);
        return password;
    }
    inputComfirmPassword(password) {
        let comfirmPassword = '';
        do {
            comfirmPassword = rl.question("Nhap lai password:");
            if (comfirmPassword != password) {
                console.log("Mat khau khong khop");
            }
        } while (comfirmPassword != password);
    }
    inputEmail(emailRegex) {
        let email = '';
        let isValidEmail = true;
        do {
            email = rl.question("Nhap Email:");
            let currentEmail = this.userManagement.findByEmail(email);
            if (!emailRegex.test(email)) {
                console.log("Email khong hop le!");
                isValidEmail = false;
            }
            else {
                isValidEmail = true;
                if (currentEmail) {
                    console.log("Email nay da duoc dang ky");
                    isValidEmail = false;
                }
                else {
                    isValidEmail = true;
                }
            }
        } while (!isValidEmail);
        return email;
    }
    run() {
        let choice = -1;
        do {
            console.log("--Quan ly san pham--");
            console.log("1. Dang nhap");
            console.log("2. Dang ky");
            console.log("0. Thoat");
            choice = +rl.question('Nhap lua chon:');
            switch (choice) {
                case LoginChoice.LOGIN: {
                    console.log("Dang nhap");
                    this.formLogin();
                    break;
                }
                case LoginChoice.REGISTER: {
                    console.log("--Dang ky tai khoan--");
                    this.formRegister();
                    break;
                }
                case 0: {
                    break;
                }
            }
        } while (choice !== 0);
    }
    formRegister() {
        let user = this.inputUser();
        this.userManagement.createNew(user);
        console.log("Dang ky thanh cong!");
    }
    formLogin() {
        let currentUser = null;
        let isLogin = true;
        do {
            let username = rl.question("Nhap tai khoan:");
            let password = rl.question("Nhap mat khau:");
            currentUser = this.userManagement.loginUser(username, password);
            if (!currentUser) {
                console.log("Tai khoan hoac mat khau sai");
                isLogin = false;
            }
            else {
                isLogin = true;
            }
        } while (!isLogin);
        if (currentUser !== null) {
            if ((currentUser === null || currentUser === void 0 ? void 0 : currentUser.$role) == e_user_1.Role.ADMIN) {
                this.adminMenu.run();
            }
            else {
                console.log("Menu user");
            }
        }
    }
}
exports.LoginMenu = LoginMenu;
