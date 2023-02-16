import {forwardRef, HttpException, HttpStatus, Inject} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UsersModel} from '@app/models';
import {Repository} from 'typeorm';
import {GoogleData, GoogleRegisterDTO} from './dto/googleDTO';
import {FileDirectories, Roles} from '@app/types/models';
import {generateId} from '@app/lib/helpers';
import {RegisterUserDTO} from "@app/routes/users/dto/authDTO";
import {ObjectOptional} from "@app/types/helpers";
import {EditProfileForm} from "@app/routes/users/dto/editProfileDTO";
import {AuthService} from "@app/routes/auth";
import {ServerExceptions} from "@app/types/exceptions";
import {FilesService} from "@app/routes/files/files.service";

export class UsersService {
  constructor(
    @InjectRepository(UsersModel)
    private users: Repository<UsersModel>,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
    private fileService: FilesService
  ) {}

  async getIdAndPasswordByEmail(email: string) {
    return await this.users.findOne({
      select: ["password", "user_id"],
      where: { email },
    });
  }

  async createUser(user: RegisterUserDTO) {
    return await this.users.save(user);
  }

  async getUserById(user_id: number) {
    return await this.users.findOneBy({ user_id });
  }

  convertGoogleData(googleData: GoogleData, role: Roles): GoogleRegisterDTO {
    const { given_name, sub, family_name, email, picture } = googleData;
    return {
      email,
      firstName: given_name,
      lastName: family_name,
      google_sub: sub,
      password: `google_generated__${generateId()}`,
      role,
      avatar: picture,
    };
  }

  async getIdByGoogleSub(google_sub: string): Promise<UsersModel> {
    return this.users.findOneBy({ google_sub });
  }

  async changeProfile(
    data: ObjectOptional<EditProfileForm>
  ): Promise<UsersModel> {
    const user_id = await this.authService.getUserIdByPayload()
    const response = await this.users.update({ user_id }, data);
    if (!response.affected) {
      throw new HttpException(
        ServerExceptions.INCORRECT_USER_DATA,
        HttpStatus.ACCEPTED
      );
    }

    return this.getUserById(user_id);
  }
  async getUserAvatar(user_id : number){
    const response =  await this.users.findOne({
      select: ["avatar"],
      where: { user_id },
    });
    return response?.avatar
  }

  async getUserBackground(user_id : number){
    const response =  await this.users.findOne({
      select: ["background"],
      where: { user_id },
    });
    console.log(response)
    return response?.background
  }

  async replaceOldFileToNew(image: any, user_id, mode: FileDirectories,
                    getPath: (user_id: number) => Promise<string>){
    const fileUrl = await this.fileService.uploadFile(image, mode)


    const oldImage = await getPath(user_id)

    console.log(oldImage)
    if (oldImage){
      await this.fileService.deleteFile(oldImage, mode)
    }

    return fileUrl
  }

  async changeUserImage(image: any): Promise<string>{
    const user_id = await this.authService.getUserIdByPayload()
    const fileUrl = await this.replaceOldFileToNew(image, user_id,
        FileDirectories.USER_AVATAR, this.getUserAvatar.bind(this))

    await this.users.update({user_id}, {avatar: fileUrl})
    return fileUrl
  }

  async changeUserBackground(image: any): Promise<string>{
    const user_id = await this.authService.getUserIdByPayload()
    const fileUrl = await this.replaceOldFileToNew(image, user_id,
        FileDirectories.USER_BACKGROUND, this.getUserBackground.bind(this))

    await this.users.update({user_id}, {background: fileUrl})
    return fileUrl
  }


}
