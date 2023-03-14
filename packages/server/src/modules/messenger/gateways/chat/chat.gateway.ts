import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { appConfig } from '@app/config'
import { Server, Socket } from 'socket.io'
import { createGateway } from '@modules/messenger/lib/createGateway'
import { SocketGateWays } from '@app/types/global'
import { StatusGateway } from '../status/status.gateway'
import { MessengerRoomsService } from '@modules/messenger'
import { MessengerEvents, MessengerGroups } from './types'
import { forwardRef, Inject } from '@nestjs/common'
import { gatewayGroup } from '@modules/messenger/lib/gatewayGroup'
import { NewMessage } from './requestTypes'

@WebSocketGateway(appConfig.socketPort, createGateway(SocketGateWays.MESSENGER))
export class ChatGateway {
    @WebSocketServer()
      server: Server
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
      const starterId = await this.getUserIdByHeaders(client)

      const room = await this.roomsService.startChat(starterId, invitedId)

      client.emit(MessengerEvents.ADD_ROOM, room)
    }

    @SubscribeMessage(MessengerEvents.SUBSCRIBE_TO_ROOM)
    async makeRoomSubscription(
        @MessageBody('roomId') roomId: number,
        @ConnectedSocket() client: Socket
    ) {
      client.join(gatewayGroup(MessengerGroups.MESSENGER_ROOM, roomId))
    }
    @SubscribeMessage(MessengerEvents.UNSUBSCRIBE_FROM_ROOM)
    async unsubscribeFromRoom(
        @MessageBody('roomId') roomId: number,
        @ConnectedSocket() client: Socket
    ) {
      client.leave(gatewayGroup(MessengerGroups.MESSENGER_ROOM, roomId))
    }

    @SubscribeMessage(MessengerEvents.SEND_MESSAGE)
    async sendMessage(
        @MessageBody() message: NewMessage,
        @ConnectedSocket() client: Socket
    ) {
      const senderId = await this.getUserIdByHeaders(client)
      const newMessage = await this.roomsService.saveMessage({ ...message, senderId })

      client.emit(MessengerEvents.ADD_MESSAGE, newMessage)
      client.to(gatewayGroup(MessengerGroups.MESSENGER_ROOM, message.roomId))
          .emit(MessengerEvents.ADD_MESSAGE, newMessage)
    }

    @SubscribeMessage(MessengerEvents.TYPING)
    async userTyping(
        @MessageBody('roomId') roomId: number,
        @ConnectedSocket() client: Socket
    ) {
      client.to(gatewayGroup(MessengerGroups.MESSENGER_ROOM, roomId))
          .emit(MessengerEvents.TYPING)
    }

    @SubscribeMessage(MessengerEvents.NO_LONGER_TYPING)
    async noLongerTyping(
        @MessageBody('roomId') roomId: number,
        @ConnectedSocket() client: Socket
    ) {
      client.to(gatewayGroup(MessengerGroups.MESSENGER_ROOM, roomId))
          .emit(MessengerEvents.NO_LONGER_TYPING)
    }

    private async getUserIdByHeaders(client: Socket) {
      const userId = Number(client.handshake.headers.userid)
      return isNaN(userId) ? null : userId
    }
}
