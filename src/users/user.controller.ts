import { Request, Response } from "express";
import{ UserService } from "./user.service";
import { WEBSOCKET } from "../webSocket/webSocket";

export class UserController{
    private webSocket = WEBSOCKET.getInstance();

    userService: UserService = new UserService();
    async getUser(req: Request, res: Response){
        this.webSocket.broadcast('user get')
        const data = await this.userService.getUsers();
        res.send(data);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    }

    async createUser(req: Request, res: Response){
        const createUser = await this.userService.createUser(req.body)
        res.send(createUser);
    }
}