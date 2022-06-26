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
exports.AdminMenu = void 0;
const product_management_1 = require("../management/product/product-management");
const rl = __importStar(require("readline-sync"));
class AdminMenu {
    constructor() {
        this.productMenu = new product_management_1.ProductManagement();
    }
    run() {
        let choice = -1;
        do {
            console.log("--Menu Quan Ly--");
            console.log("1. Quan ly danh muc");
            console.log("2. Quan ly san pham");
            console.log("0. Dang xuat");
            choice = +rl.question("Nhap lua chon cua ban:");
            switch (choice) {
                case 1: {
                    //Quan ly danh muc;
                    break;
                }
                case 2: {
                    //Quan ly san pham;
                    break;
                }
                case 0: {
                    break;
                }
            }
        } while (choice !== 0);
    }
}
exports.AdminMenu = AdminMenu;
