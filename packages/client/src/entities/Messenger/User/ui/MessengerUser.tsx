import {FC, ReactNode} from 'react';
import s from './style.module.scss';
import {NextImage} from 'shared/ui';

const MessengerUser: FC<{ SelectUser: FC<{ children: ReactNode }> }> = ({SelectUser}) => {
    return <SelectUser>
        <div className={s.user}>
            <div className={s.wrapper}>
                <div className={s.image}>
                    <NextImage src={'/avatar.jpg'}/>
                </div>
                <div className={s.info}>
                    <h3>Test User</h3>
                    <span>Chadgram Web was updated.</span>
                </div>
                <div className={s.time}>
                    <span>19:48</span>
                    <div className={s.new_message}>1</div>
                </div>
            </div>
        </div>
    </SelectUser>;
};

export default MessengerUser;
