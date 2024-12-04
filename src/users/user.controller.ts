import { Request, Response } from "express";
import{ UserService } from "./user.service";

export class UserController{
    userService: UserService = new UserService();
    async getUser(req: Request, res: Response){ 
        const data = await this.userService.getUsers();
        res.send(data);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    }

    async createUser(req: Request, res: Response){
        const createUser = await this.userService.createUser(req.body)
        res.send(createUser);
    }
}