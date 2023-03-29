import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Namespace, Socket } from 'socket.io';
import { TokenService } from '@modules/auth/services';
import { UserStatusService } from '@modules/messenger/services/user-status.service';
import { RoomsService } from '@modules/messenger';
export declare class StatusGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private tokenService;
    private onlineUsers;
    private roomsService;
    private readonly logger;
    authServer: Namespace;
    constructor(tokenService: TokenService, onlineUsers: UserStatusService, roomsService: RoomsService);
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): Promise<void>;
    subscribeUser(targetId: number, client: Socket): Promise<void>;
    getUserIdByHeaders(client: Socket): Promise<number>;
}
