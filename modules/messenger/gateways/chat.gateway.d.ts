import { Socket } from 'socket.io';
export declare class ChatGateway {
    private users;
    server: any;
    handleMessage(client: Socket, body: any): Promise<void>;
}
