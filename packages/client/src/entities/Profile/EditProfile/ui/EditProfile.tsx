import {FC} from 'react';
import s from './style.module.scss'
import {NextImage} from "shared/ui";
import {HeadField, TextArea} from "mui";
import {EditProfileProps} from "../types";

const EditProfile: FC<EditProfileProps> = ({
                                               ChangeBackground, ChangeAvatar
                                               , close, submitForm
                                           }) => {
    return <div className={s.add_product_block}>
        <h2 className={s.title}>Change Profile</h2>
        <div className={s.container}>

            <div className={s.background}>
                <NextImage src={'/electronic_prewiew.svg'}/>
                {ChangeBackground}
            </div>
            <div className={s.user_info_block}>
                <div className={s.user_avatar_block}>
                    <div className={s.user_avatar}>
                        <NextImage src={'/avatar.jpg'}/>
                    </div>
                    {ChangeAvatar}
                </div>
                <HeadField title={'Username'}/>
                <HeadField title={'Password'} isPassword readOnly/>
            </div>
            <TextArea/>
            <div className={s.save_buttons}>
                <button className="primary_button" onClick={submitForm}>Save</button>
                <button className="outlined_button" onClick={close}>Cancel</button>
            </div>
        </div>
    </div>
}

export default EditProfile
