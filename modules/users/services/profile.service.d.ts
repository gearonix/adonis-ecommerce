import { UsersEntity } from '@app/entities';
import { Repository } from 'typeorm';
import { ObjectOptional } from '@app/types/helpers';
import { EditProfileForm } from '@app/modules/users/dto/editProfileDTO';
import { AuthService } from '@app/modules/auth';
import { UsersService } from '@app/modules/users';
import { FilesService } from '@app/modules/files/files.service';
export declare class ProfileService {
    private users;
    private authService;
    private fileService;
    private usersService;
    constructor(users: Repository<UsersEntity>, authService: AuthService, fileService: FilesService, usersService: UsersService);
    changeProfile(data: ObjectOptional<EditProfileForm>): Promise<UsersEntity>;
    private replaceOldFileToNew;
    changeUserImage(image: any): Promise<string>;
    changeUserBackground(image: any): Promise<string>;
}
