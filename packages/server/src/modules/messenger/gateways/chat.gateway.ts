import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { appConfig } from '@app/config'
import { Socket } from 'socket.io'
import { createGateway } from '@modules/messenger/config/createGateway'
import { SocketGateWays } from '@app/types/global'

@WebSocketGateway(appConfig.socketPort, createGateway(SocketGateWays.MESSENGER))
export class ChatGateway {
  private users


    @WebSocketServer()
      server

    @SubscribeMessage('message')
    async handleMessage(client: Socket, body: any) {
      this.server.emit('message', {
        test: 'socket received.'
      })
    }
}
