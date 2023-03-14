import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets'
import { appConfig } from '@app/config'
import { createGateway } from '@modules/messenger/lib/createGateway'
import { SocketGateWays, UserStatus } from '@app/types/global'
import { Namespace, Socket } from 'socket.io'
import cookie from 'cookie'
import { TokenService } from '@modules/auth/services'
import { UserStatusService } from '@modules/messenger/services/user-status.service'
import { forwardRef, Inject, Logger } from '@nestjs/common'
import { gatewayGroup } from '@modules/messenger/lib/gatewayGroup'
import { StatusEvents, StatusGroups } from '@modules/messenger/gateways/status/types'
import { MessengerRoomsService } from '@modules/messenger'

@WebSocketGateway(appConfig.socketPort, createGateway(SocketGateWays.AUTH))
export class StatusGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(StatusGateway.name)
  @WebSocketServer()
    authServer: Namespace

  constructor(
        @Inject(forwardRef(() => TokenService))
        private tokenService: TokenService,
        private onlineUsers: UserStatusService,
        @Inject(forwardRef(() => MessengerRoomsService))
        private roomsService: MessengerRoomsService
  ) {}

  async handleConnection(@ConnectedSocket() client: Socket) {
    const userId = await this.getUserId(client)
    this.onlineUsers.addUser(userId)

    client.to(gatewayGroup(StatusGroups.ONLINE_STATUS, userId))
        .emit(StatusEvents.STATUS_CHANGED, { status: UserStatus.ONLINE })

    this.logger.log(`Amount of connected sockets: ${this.authServer.sockets.size}`)
  }
  async handleDisconnect(@ConnectedSocket() client: Socket) {
    const userId = await this.getUserId(client)
    this.onlineUsers.removeUser(userId)

    client.to(gatewayGroup(StatusGroups.ONLINE_STATUS, userId))
        .emit(StatusEvents.STATUS_CHANGED, { status: UserStatus.OFFLINE })

    this.logger.log(`Amount of connected sockets: ${this.authServer.sockets.size}`)
  }

  @SubscribeMessage(StatusEvents.SUBSCRIBE_TO_STATUS)
  async subscribeUser(
      @MessageBody('targetId') targetId: number,
      @ConnectedSocket() client: Socket
  ) {
    client.join(gatewayGroup(StatusGroups.ONLINE_STATUS, targetId))
  }

  async getUserId(client: Socket) {
    const cookies = client.handshake.headers.cookie
    if (!cookies) return
    const token = cookie.parse(cookies).AUTH_TOKEN

    if (token) {
      return this.tokenService.verifyToken(token)
    }
  }
}
