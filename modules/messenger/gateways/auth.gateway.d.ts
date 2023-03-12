import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Namespace, Socket } from 'socket.io';
import { TokenService } from '@modules/auth/services';
import { OnlineUsersService } from '@modules/messenger/services/onlineUsers.service';
export declare class AuthGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private tokenService;
    private onlineUsers;
    private readonly logger;
    authServer: Namespace;
    constructor(tokenService: TokenService, onlineUsers: OnlineUsersService);
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): Promise<void>;
    private getUserId;
}
