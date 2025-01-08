import { Kafka } from "kafkajs";

export class KafkaClass {
    private kafka:Kafka | null = null
    constructor(){

    }
    async connect(){
        try{
            this.kafka = new Kafka({
                clientId: "my-app",
                brokers: [`${process.env.DOMAIN}${process.env.KAFKA_PORT}`]
            });
            const s = await this.kafka?.admin().connect()
            console.log(`🚀 kafka is connect to port ${process.env.KAFKA_PORT}`)
        }catch(error){
            console.log(error);
        }
    }

    async startup(){
        if (this.kafka) {
            
        } 
    }
}