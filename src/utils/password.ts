import bcrypt from 'bcrypt';
class PasswordUtils {
    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    async comparePassword(Password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(Password, hashedPassword);
    }
}