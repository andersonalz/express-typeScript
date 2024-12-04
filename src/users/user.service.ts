import { User } from "./user.model";
import { UserDto } from "./dto/user.dto";
import { validate } from "class-validator";

export class UserService{

    async getUsers(){ 
        try {
            const users = await User.find();
            return users;
        } catch (error) {
            console.log(error);
        }

    }

    async createUser(user: UserDto){
        try{
            const dtoUser = new UserDto(user);
            const errors = await validate(dtoUser);
            if(errors.length > 0){
              console.log(errors)
              throw new Error('Validation failed');
            }
            const newUser = await User.create(user);
            await newUser.save();
            return newUser;
        }catch(error){
            console.log(error);
        }
        
    }
}