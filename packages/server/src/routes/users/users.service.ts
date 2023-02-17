import {forwardRef, HttpException, HttpStatus, Inject} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {UsersModel} from '@app/models'
import {Repository} from 'typeorm'
import {GoogleData, GoogleRegisterDTO} from './dto/googleDTO'
import {FileDirectories, Roles} from '@app/types/models'
import {generateId} from '@app/lib/helpers'
import {RegisterUserDTO} from '@app/routes/users/dto/authDTO'
import {ObjectOptional} from '@app/types/helpers'
import {EditProfileForm} from '@app/routes/users/dto/editProfileDTO'
import {AuthService} from '@app/routes/auth'
import {ServerExceptions} from '@app/types/exceptions'
import {FilesService} from '@app/routes/files/files.service'

export class UsersService {
  constructor(
    @InjectRepository(UsersModel)
    private users: Repository<UsersModel>,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
    private fileService: FilesService,
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

  convertGoogleData(googleData: GoogleData, role: Roles): GoogleRegisterDTO {
    // eslint-disable-next-line camelcase
    const {given_name, sub, family_name, email, picture} = googleData
    return {
      email,
      // eslint-disable-next-line camelcase
      firstName: given_name,
      // eslint-disable-next-line camelcase
      lastName: family_name,
      google_sub: sub,
      password: `google_generated__${generateId()}`,
      role,
      avatar: picture,
    }
  }

  async getIdByGoogleSub(googleSub: string): Promise<UsersModel> {
    return this.users.findOneBy({google_sub: googleSub})
  }

  async changeProfile(
      data: ObjectOptional<EditProfileForm>,
  ): Promise<UsersModel> {
    const userId = await this.authService.getUserIdByPayload()
    const response = await this.users.update({userId}, data)
    if (!response.affected) {
      throw new HttpException(
          ServerExceptions.INCORRECT_USER_DATA,
          HttpStatus.ACCEPTED,
      )
    }

    return this.getUserById(userId)
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

  async replaceOldFileToNew(image: any, userId, mode: FileDirectories,
      getPath: (userId: number) => Promise<string>) {
    const fileUrl = await this.fileService.uploadFile(image, mode)


    const oldImage = await getPath(userId)

    if (oldImage) {
      await this.fileService.deleteFile(oldImage, mode)
    }

    return fileUrl
  }

  async changeUserImage(image: any): Promise<string> {
    const userId = await this.authService.getUserIdByPayload()
    const fileUrl = await this.replaceOldFileToNew(image, userId,
        FileDirectories.USER_AVATAR, this.getUserAvatar.bind(this))

    await this.users.update({userId}, {avatar: fileUrl})
    return fileUrl
  }

  async changeUserBackground(image: any): Promise<string> {
    const userId = await this.authService.getUserIdByPayload()
    const fileUrl = await this.replaceOldFileToNew(image, userId,
        FileDirectories.USER_BACKGROUND, this.getUserBackground.bind(this))

    await this.users.update({userId}, {background: fileUrl})
    return fileUrl
  }
}
