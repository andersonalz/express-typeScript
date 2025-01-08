import mongoose from 'mongoose';


export class Mongodb {
    async connection(){
        try {
            const db = await mongoose.connect(`${process.env.MONGODB_URL}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`);
            console.log(`🚀 Connected to MongoDB ${process.env.DATABASE_NAME} Successfully on port ${process.env.DATABASE_PORT}`);
            return db;
        } catch (err) {
            console.log(err);
        }
    }
}
