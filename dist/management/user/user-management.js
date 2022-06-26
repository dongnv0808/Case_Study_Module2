"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
const e_user_1 = require("../../module/e-user");
const user_1 = require("../../module/user");
class UserManagement {
    constructor() {
        let admin = new user_1.User('admin', '123456', 'admin@gmail.com', 'ADMIN');
        admin.$id = UserManagement.id;
        admin.$role = e_user_1.Role.ADMIN;
        UserManagement.users.push(admin);
    }
    getAll() {
        return UserManagement.users;
    }
    createNew(user) {
        UserManagement.id++;
        user.$id = UserManagement.id;
        user.$role = e_user_1.Role.USER;
        UserManagement.users.push(user);
    }
    updateById(index, user) {
        let indexUpdate = this.findById(index);
        if (indexUpdate !== -1) {
            UserManagement.users[indexUpdate] = user;
        }
    }
    removeById(index) {
        let indexRemove = this.findById(index);
        UserManagement.users.splice(indexRemove, 1);
    }
    loginUser(username, password) {
        for (let user of UserManagement.users) {
            if (user.$user == username && user.$password == password) {
                console.log("Dang nhap thanh cong");
                return user;
            }
        }
        return null;
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < UserManagement.users.length; i++) {
            if (UserManagement.users[i].$id == id) {
                return index = i;
            }
        }
        return index;
    }
    findByUser(userName) {
        for (const user of UserManagement.users) {
            if (userName == user.$user) {
                return user;
            }
        }
        return null;
    }
    findByEmail(email) {
        for (const user of UserManagement.users) {
            if (email == user.$email) {
                return user;
            }
        }
        return null;
    }
}
exports.UserManagement = UserManagement;
UserManagement.users = [];
UserManagement.id = 1;
