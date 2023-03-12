import { OnGatewayConnection, OnGatewayDisconnect,
  WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { appConfig } from '@app/config'
import { createGateway } from '@modules/messenger/config/createGateway'
import { SocketGateWays } from '@app/types/global'
import { Namespace, Socket } from 'socket.io'
import cookie from 'cookie'
import { TokenService } from '@modules/auth/services'
import { OnlineUsersService } from '@modules/messenger/services/onlineUsers.service'
import { Logger } from '@nestjs/common'

@WebSocketGateway(appConfig.socketPort, createGateway(SocketGateWays.AUTH))
export class AuthGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(AuthGateway.name)
  @WebSocketServer()
    authServer: Namespace

  constructor(
        private tokenService: TokenService,
        private onlineUsers: OnlineUsersService
  ) {}

  async handleConnection(client: Socket) {
    const userId = await this.getUserId(client)
    this.onlineUsers.addUser(userId)
    this.logger.log(`Amount of connected sockets: ${this.authServer.sockets.size}`)
  }
  async handleDisconnect(client: Socket) {
    const userId = await this.getUserId(client)
    this.onlineUsers.removeUser(userId)
    this.logger.log(`Amount of connected sockets: ${this.authServer.sockets.size}`)
  }


  private async getUserId(client: Socket) {
    const cookies = client.handshake.headers.cookie
    if (!cookies) return
    const token = cookie.parse(cookies).AUTH_TOKEN

    if (token) {
      return this.tokenService.verifyToken(token)
    }
  }
}
