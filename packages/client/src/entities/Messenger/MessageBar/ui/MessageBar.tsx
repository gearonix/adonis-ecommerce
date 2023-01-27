import {FC} from 'react';
import s from './style.module.scss'
import {AiFillFileAdd} from "icons";
import {MessageBarProps} from "entities/Messenger/MessageBar/types";


const MessageBar: FC<MessageBarProps> = ({placeholder = 'Message', MessageForm}) => {
    return <div className={s.message_bar}>
        <div className={s.icon_wrapper}>
            <AiFillFileAdd/>
        </div>
        <MessageForm placeholder={placeholder}/>
    </div>
}


export default MessageBar
