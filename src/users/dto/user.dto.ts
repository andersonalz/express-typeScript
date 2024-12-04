import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UserDto{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;
    constructor(user: UserDto){
        this.name = user.name;
        this.email = user.email;
    }
}