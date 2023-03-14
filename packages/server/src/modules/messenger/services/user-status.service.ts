import { Injectable, Logger } from '@nestjs/common'
import { addIfNotExists, removeElement } from '@lib/helpers'
import { UserStatus } from '@app/types/global'

@Injectable()
export class UserStatusService {
  private onlineUsers : number[] = []

  addUser(userId: number) {
    this.onlineUsers = addIfNotExists(this.onlineUsers, userId)
  }

  removeUser(userId : number) {
    this.onlineUsers = removeElement(this.onlineUsers, userId)
    console.log(this.onlineUsers)
  }
  getOnlineStatus(userId: number): UserStatus {
    return this.onlineUsers.includes(userId) ? UserStatus.ONLINE: UserStatus.OFFLINE
  }
}
