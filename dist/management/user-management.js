"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userManagement = void 0;
const e_user_1 = require("../module/e-user");
const user_1 = require("../module/user");
class userManagement {
    constructor() {
        let admin = new user_1.User('admin', '123456', 'admin@gmail.com', 'ADMIN');
        admin.$id = userManagement.id;
        admin.$role = e_user_1.Role.ADMIN;
        userManagement.users.push(admin);
    }
    getAll() {
        return userManagement.users;
    }
    createNew(user) {
        userManagement.id++;
        user.$id = userManagement.id;
        user.$role = e_user_1.Role.USER;
        userManagement.users.push(user);
    }
    updateById(index, user) {
        let indexUpdate = this.findById(index);
        if (indexUpdate !== -1) {
            userManagement.users[indexUpdate] = user;
        }
    }
    removeById(index) {
        let indexRemove = this.findById(index);
        userManagement.users.splice(indexRemove, 1);
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < userManagement.users.length; i++) {
            if (userManagement.users[i].$id == id) {
                return index = i;
            }
        }
        return index;
    }
    findByUser(userName) {
        for (const user of userManagement.users) {
            if (userName == user.$user) {
                return user;
            }
        }
        return null;
    }
    findByEmail(email) {
        for (const user of userManagement.users) {
            if (email == user.$email) {
                return user;
            }
        }
        return null;
    }
}
exports.userManagement = userManagement;
userManagement.users = [];
userManagement.id = 1;
