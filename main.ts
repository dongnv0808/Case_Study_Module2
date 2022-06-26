import { read } from 'fs';
import * as rl from 'readline-sync';
import { UserManagement } from './management/user/user-management';
import { LoginMenu } from './menu/login-menu';

let loginMenu = new LoginMenu();
loginMenu.run();