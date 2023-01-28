import {FC} from 'react';
import s from './style.module.scss'
import {NextImage} from "shared/ui";
import {ProfileHeaderTempP} from "../types";

const ProfileHeaderTemp: FC<ProfileHeaderTempP> = ({ChangeBackground, OpenProfileEdit}) => {
    return <div className={s.profile_header}>
        <div className={s.electronic_prewiewground}>
            {ChangeBackground}
            <NextImage src={'/electronic_prewiew.svg'}/>
        </div>
        <div className={s.info_block}>
            <div className={s.avatar}>
                <NextImage src={'/avatar.jpg'}/>
            </div>
            <div className={s.user_info}>
                <h2 className={s.user_name}>User Name</h2>
                <p className={s.description}>User description...</p>
            </div>
            <div className={s.change_profile}>
                {OpenProfileEdit}
            </div>
        </div>
    </div>
}

export default ProfileHeaderTemp
