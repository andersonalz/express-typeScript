import ampqlib from "amqplib";

export class RabbitMq {
  private connection: any
  constructor(){
    this.connect()
  }
    async connect(){
        try{
          this.connection = await ampqlib.connect("amqp://localhost:5672");
          console.log("🚀 RabbitMQ is connected to port 5672");
          this.connection.on("error", ()=>{
            console.log("error to RabbitMQ");
          })  
        }catch(error){
            console.log(error);
        }
    } 
}
