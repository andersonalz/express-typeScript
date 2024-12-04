import express from 'express';
import * as core from "express-serve-static-core";
import { UserController } from './user.controller';
const router: core.Router  = express.Router();  
export class UserRoutes {
    userRouter(): core.Router {
        const userController = new UserController();
        router.get('/user', userController.getUser.bind(userController));
        router.post('/user', userController.createUser.bind(userController));
        return router;
    }
}