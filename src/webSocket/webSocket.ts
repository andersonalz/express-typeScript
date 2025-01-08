import WebSocket, { WebSocketServer } from "ws";

export class WEBSOCKET {
    private static instance : WEBSOCKET;
    private webSocket : WebSocket.Server

    private constructor(){
        this.webSocket = new WebSocket.Server({port : 5000})
        console.log("🚀 WebSocket running on port 5000");

        this.webSocket.on('connection' , (ws: WebSocket)=>{
            console.log('connection webSocket established...')
            ws.on( "message" , (message: string)=>{
                console.log(message)
            })
        })

        this.webSocket.on('error', ( error: Error )=>{
            console.log(error);
        })
    }

    public static getInstance(): WEBSOCKET {
        if (!this.instance) {
            this.instance = new WEBSOCKET()
        }

        return this.instance
    }

    broadcast(message: string){
           this.webSocket.clients.forEach((client: WebSocket) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
           })
    }
}
  