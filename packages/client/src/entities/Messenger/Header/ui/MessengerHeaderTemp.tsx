import {FC} from 'react';
import s from './style.module.scss'
import {UserInfo} from "components/pages/messenger/aside/messages_nav";

const MessengerHeaderTemp: FC<{ Search: FC }> = ({Search}) => {
    return <div className={s.messages_header}>
        <UserInfo/>
        <Search/>
    </div>
}

export default MessengerHeaderTemp
