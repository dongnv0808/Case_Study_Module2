import { User } from "../../module/user";
import { IManagement } from "../i-management";

export interface IUserManagement extends IManagement<User>{
    findByUser(user: string): User | null;
    findByEmail(email: string): User | null;
    loginUser(user: string, password: string): User | null;
    
}