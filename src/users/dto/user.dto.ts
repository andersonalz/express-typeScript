import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UserDto{
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;
    
    constructor(user: UserDto){
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
    }
}