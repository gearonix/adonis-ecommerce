import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { appConfig } from '@app/config'
import { Socket } from 'socket.io'
import { createGateway } from '@modules/messenger/lib/createGateway'
import { SocketGateWays } from '@app/types/global'
import { StatusGateway } from '../status/status.gateway'
import { MessengerRoomsService } from '@modules/messenger'
import { MessengerEvents, MessengerGroups } from './types'
import { forwardRef, Inject } from '@nestjs/common'
import { gatewayGroup } from '@modules/messenger/lib/gatewayGroup'

@WebSocketGateway(appConfig.socketPort, createGateway(SocketGateWays.MESSENGER))
export class ChatGateway {
    @WebSocketServer()
      server
    constructor(
        private statusGateway: StatusGateway,
        @Inject(forwardRef(() => MessengerRoomsService))
        private roomsService: MessengerRoomsService
    ) {}

    @SubscribeMessage(MessengerEvents.START_CHAT)
    async startChat(
        @MessageBody('targetId') invitedId: number,
        @ConnectedSocket() client: Socket
    ) {
      const starterId = await this.statusGateway.getUserId(client)

      const room = await this.roomsService.startChat([starterId, invitedId])

      client.join(gatewayGroup(MessengerGroups.MESSENGER_ROOM, room.roomId))
    }
}
