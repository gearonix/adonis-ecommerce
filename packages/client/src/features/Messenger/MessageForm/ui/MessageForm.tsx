import {FC} from 'react';
import s from './style.module.scss'
import {MdSend} from "icons";

const MessageForm: FC<{ placeholder: string }> = ({placeholder}) => {
    return <>
        <input placeholder={placeholder} maxLength={60}/>
        <div className={s.send}>
            <MdSend/>
        </div>
    </>
}

export default MessageForm
