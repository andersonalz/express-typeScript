import { Request, Response } from "express";
import { AuthenticationService } from "./authentication.service";
export class AuthenticationController {
    private authenticationService = new AuthenticationService();
    async signup(req: Request, res: Response) {
        const user = this.authenticationService.signup();
        res.send(user)
    }
    async signin() { 

    }

}