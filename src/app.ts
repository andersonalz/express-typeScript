import express, { Request, Response } from 'express';
import { UserRoutes } from './users/user.routes';
import { Mongodb } from './dataBase/db';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { RabbitMq } from './brokers/rabbitMq';
import { KafkaClass } from './brokers/kafka';

dotenv.config();
export const app = express();
//
const port: number = 3000;
const userRoutes = new UserRoutes();
new RabbitMq()
new KafkaClass().connect()
//
app.use(bodyParser.json());
app.use(userRoutes.userRouter());
//
new Mongodb().connection()
app.listen(port, ():void => {
    console.log(`Server is running on port ${port}`);
});