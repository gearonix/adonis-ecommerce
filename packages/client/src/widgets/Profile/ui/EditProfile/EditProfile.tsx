import {FC} from 'react';
import {EditProfileTemplate} from 'entities/Profile/EditProfile';
import {ChangeBackground} from "features/Profile/ChangeBackground";
import {ChangeAvatar} from "features/Profile/ChangeAvatar";

const EditProfile: FC<{ close: () => void }> = ({close}) => {
    return <EditProfileTemplate ChangeBackground={<ChangeBackground/>}
                                ChangeAvatar={<ChangeAvatar/>} submitForm={() => {
    }}
                                close={close}/>
}

export default EditProfile
