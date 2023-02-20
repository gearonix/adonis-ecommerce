import {forwardRef, Inject} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {UsersEntity} from '@app/entities'
import {Repository} from 'typeorm'
import {RegisterUserDTO} from '@routes/users/dto/authDTO'
import {AuthService} from '@routes/auth'

export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private users: Repository<UsersEntity>,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  async getIdAndPasswordByEmail(email: string) {
    return await this.users.findOne({
      select: ['password', 'userId'],
      where: {email},
    })
  }

  async createUser(user: RegisterUserDTO) {
    return await this.users.save(user)
  }

  async getUserById(userId: number) {
    return await this.users.findOneBy({userId})
  }

  async getIdByGoogleSub(googleSub: string): Promise<UsersEntity> {
    return this.users.findOneBy({google_sub: googleSub})
  }

  async getUserAvatar(userId : number) {
    const response = await this.users.findOne({
      select: ['avatar'],
      where: {userId},
    })
    return response?.avatar
  }

  async getUserBackground(userId : number) {
    const response = await this.users.findOne({
      select: ['background'],
      where: {userId},
    })
    return response?.background
  }
  async getUserRoleById(userId: number){
    const response = await this.users.findOne({
      select: ['role'],
      where: {userId},
    })
    return response?.role
  }
}
