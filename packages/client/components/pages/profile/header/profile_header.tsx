import {NCT} from 'types/global'
import s from './profile_header.module.scss';
import {NextImage} from "components/UIkit/components";
import {BsPen} from 'icons'
import {useState} from "react";
import {ContentModal} from "components/UIkit/mui/mui_components";
import {ChangeProfile} from "components/pages/profile/wall/profile_wall";

const ProfileHeader: NCT = () => {
    const [isChangeProfile,openChangeProfile] = useState<boolean>(false)
    return <div className={s.profile_header}>
        <ContentModal isOpened={isChangeProfile} close={() => openChangeProfile(false)}>
            <ChangeProfile/>
        </ContentModal>

        <div className={s.profile_background}>
            <button className={'primary_button'}><BsPen/> Change background</button>
            <NextImage src={'/profile_back.jpg'} />
        </div>
        <div className={s.info_block}>
            <div className={s.avatar}>
                <NextImage src={'/avatar.jpg'} />
            </div>
            <div className={s.user_info}>
                <h2 className={s.user_name}>User Name</h2>
                <p className={s.description}>User description...</p>
            </div>
            <div className={s.change_profile} onClick={() => openChangeProfile(true)}>
                <button className="outlined_button">Change profile</button>
            </div>
        </div>
    </div>
}

export default ProfileHeader
