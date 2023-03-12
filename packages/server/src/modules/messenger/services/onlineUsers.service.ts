import { Injectable, Logger } from '@nestjs/common'
import { addIfNotExists, removeElement } from '@lib/helpers'

@Injectable()
export class OnlineUsersService {
  private onlineUsers : number[] = []

  addUser(userId: number) {
    this.onlineUsers = addIfNotExists(this.onlineUsers, userId)
    console.log(this.onlineUsers)
  }

  removeUser(userId : number) {
    this.onlineUsers = removeElement(this.onlineUsers, userId)
    console.log(this.onlineUsers)
  }
}
