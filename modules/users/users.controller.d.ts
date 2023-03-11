import { UsersService } from './services/users.service';
import { EditProfileForm } from './dto/editProfileDTO';
import { ObjectOptional } from '@app/types/helpers';
import { ProfileService } from './services/profile.service';
export declare class UsersController {
    private usersService;
    private profileService;
    constructor(usersService: UsersService, profileService: ProfileService);
    changeProfile(body: ObjectOptional<EditProfileForm>): Promise<import("../../entities/users.entity").UsersEntity>;
    changeAvatar(avatar: any): Promise<{
        fileUrl: string;
    }>;
    changeUserBackground(background: any): Promise<{
        fileUrl: string;
    }>;
    getUser(id: any): Promise<import("../../entities/users.entity").UsersEntity & {
        isMe: boolean;
    }>;
}
