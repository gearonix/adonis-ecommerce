import { EditProfileForm } from './../dto/editProfileDTO';
import { ObjectOptional } from '@app/types/helpers';
import { ProfileService } from '@modules/users/services';
export declare class ChangeProfileController {
    private profileService;
    constructor(profileService: ProfileService);
    changeProfile(body: ObjectOptional<EditProfileForm>): Promise<import("../../../entities/users.entity").UsersEntity>;
    changeAvatar(avatar: any): Promise<{
        fileUrl: string;
    }>;
    changeUserBackground(background: any): Promise<{
        fileUrl: string;
    }>;
}
