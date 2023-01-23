import {NCT} from 'types/global'
import s from './messages_header.module.scss';
import {UserInfo} from "../aside/messages_nav";
import {AiOutlineSearch} from "icons";

const MessagesHeader: NCT = () => {
    return <header className={s.messages_header}>
        <UserInfo/>
        <div className={s.icon_wrapper}>
            <AiOutlineSearch/>
        </div>
    </header>
}

export default MessagesHeader
