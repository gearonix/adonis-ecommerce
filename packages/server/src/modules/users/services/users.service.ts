import { InjectRepository } from '@nestjs/typeorm'
import { UsersEntity } from '@app/entities'
import { Like, Repository } from 'typeorm'
import { RegisterUserDTO } from '@app/modules/users/dto/authDTO'
import { forwardRef, HttpException, HttpStatus, Inject } from '@nestjs/common'
import { AuthService } from '@app/modules/auth'
import { ServerExceptions } from '@app/types/exceptions'
import { UserStatusService } from '@modules/messenger'
import { UsersDTO } from '@modules/users/dto/usersDTO'
import { withLimit } from '@lib/helpers'
import { createUsersQuery } from '@modules/users/lib/createUsersQuery'

export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private users: Repository<UsersEntity>,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
    @Inject(forwardRef(() => UserStatusService))
    private userStatusService: UserStatusService
  ) {}

  async getUsers(query: UsersDTO) {
    const users = await this.users.find({
      where: createUsersQuery(query),
      order: { registration_date: 'DESC' },
      ...withLimit(query.page)
    })
    const count = await this.users.count()
    return {
      data: users,
      count
    }
  }

  async getIdAndPasswordByEmail(email: string) {
    return this.users.findOne({
      select: ['password', 'userId'],
      where: { email }
    })
  }

  async createUser(user: RegisterUserDTO) {
    return this.users.save(user)
  }

  async getUserById(userId: number) {
    if (isNaN(userId)) {
      throw new HttpException(ServerExceptions.INCORRECT_DATA, HttpStatus.BAD_REQUEST)
    }
    const sessionId = await this.authService.getUserId()
    const user = await this.users.findOneBy({ userId })
    if (!user?.userId) {
      throw new HttpException(ServerExceptions.USER_NOT_EXIST, HttpStatus.NOT_FOUND)
    }

    const status = await this.userStatusService.getOnlineStatus(user.userId)
    const isMe = sessionId === user.userId

    return {
      ...user,
      isMe,
      status
    }
  }

  async getIdByGoogleSub(googleSub: string): Promise<UsersEntity> {
    return this.users.findOneBy({ google_sub: googleSub })
  }

  async getUserAvatar(userId : number) {
    const response = await this.users.findOne({
      select: ['avatar'],
      where: { userId }
    })
    return response?.avatar
  }

  async getUserBackground(userId : number) {
    const response = await this.users.findOne({
      select: ['background'],
      where: { userId }
    })
    return response?.background
  }
  async getUserRoleById(userId: number) {
    const response = await this.users.findOne({
      select: ['role'],
      where: { userId }
    })
    return response?.role
  }
}
