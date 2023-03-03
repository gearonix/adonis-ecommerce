import { forwardRef, HttpException, HttpStatus, Inject } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UsersEntity } from '@app/entities'
import { Repository } from 'typeorm'
import { FileDirectories } from '@app/types/global'
import { ObjectOptional } from '@app/types/helpers'
import { EditProfileForm } from '@app/modules/users/dto/editProfileDTO'
import { AuthService } from '@app/modules/auth'
import { ServerExceptions } from '@app/types/exceptions'
import { UsersService } from '@app/modules/users'
import { FilesService } from '@app/modules/files/files.service'

export class ProfileService {
  constructor(
        @InjectRepository(UsersEntity)
        private users: Repository<UsersEntity>,
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService,
        private fileService: FilesService,
        private usersService: UsersService
  ) {}

  async changeProfile(
      data: ObjectOptional<EditProfileForm>
  ): Promise<UsersEntity> {
    const userId = await this.authService.getUserId()
    const response = await this.users.update({ userId }, data)
    if (!response.affected) {
      throw new HttpException(
          ServerExceptions.INCORRECT_USER_DATA,
          HttpStatus.ACCEPTED
      )
    }

    return this.usersService.getUserById(userId)
  }

  private async replaceOldFileToNew(image: any, userId, mode: FileDirectories,
      getPath: (userId: number) => Promise<string>) {
    const fileUrl = await this.fileService.uploadFile(image, mode)


    const oldImage = await getPath(userId)

    if (oldImage) {
      await this.fileService.deleteFile(oldImage, mode)
    }

    return fileUrl
  }

  async changeUserImage(image: any): Promise<string> {
    const userId = await this.authService.getUserId()
    const fileUrl = await this.replaceOldFileToNew(image, userId,
        FileDirectories.USER_AVATAR, this.usersService.getUserAvatar.bind(this.usersService))

    await this.users.update({ userId }, { avatar: fileUrl })
    return fileUrl
  }

  async changeUserBackground(image: any): Promise<string> {
    const userId = await this.authService.getUserId()
    const fileUrl = await this.replaceOldFileToNew(image, userId,
        FileDirectories.USER_BACKGROUND, this.usersService.getUserBackground.bind(this.usersService))

    await this.users.update({ userId }, { background: fileUrl })
    return fileUrl
  }
}
