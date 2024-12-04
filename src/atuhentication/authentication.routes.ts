import { app } from '../app';
import express from 'express';
import { AuthenticationController } from './authentication.controller';

export class AuthenticationRoutes {
    app = app
    router = express.Router();
    authenticationRouter(){
        const authenticationController = new AuthenticationController();
        this.router.post('/signup', authenticationController.signup.bind(authenticationController));
        this.router.post('/signin', authenticationController.signin.bind(authenticationController));
        return this.router;
    }
}