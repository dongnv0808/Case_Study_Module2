import { read } from 'fs';
import * as rl from 'readline-sync';
import { ProductManagement } from './management/product/product-management';
import { UserManagement } from './management/user/user-management';
import { LoginMenu } from './menu/login-menu';
import { Product } from './module/product';

let product1 = new Product('Nokia C20', 'Dien thoai', 1990000);
let product2 = new Product('Realme C11 (2021) 2GB/32GB', 'Dien thoai', 2690000);
let product3 = new Product('Laptop Acer TravelMate B3 TMB311', 'Laptop', 5490000);
let product4 = new Product('OPPO Reno7 series', 'Dien thoai', 10490000);
let product5 = new Product('Laptop Apple MacBook Air M1 2020', 'Laptop', 28990000);

let productManagement = new ProductManagement();

productManagement.createNew(product1);
productManagement.createNew(product2);
productManagement.createNew(product3);
productManagement.createNew(product4);
productManagement.createNew(product5);

let loginMenu = new LoginMenu();
loginMenu.run();