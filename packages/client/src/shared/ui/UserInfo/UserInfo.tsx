import {FC} from 'react';
import s from './style.module.scss'
import {NextImage} from "components/UIkit/components";

export const UserInfo: FC = () => {
    return <div className={s.user_info_wrapper}>
        <div className={s.image}>
            <NextImage src={'/avatar.jpg'}/>
        </div>
        <div className={s.info}>
            <h3>Test User</h3>
            <span>offline</span>
        </div>
    </div>
}

