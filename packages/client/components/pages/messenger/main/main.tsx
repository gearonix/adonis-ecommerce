import {NCT} from 'types/global'
import s from './main.module.scss';
import {AiFillFileAdd, MdSend} from "icons";
import { BsCheck2 } from 'icons';
import {FC} from "react";
import cn from "classnames";

const MessagesMain: NCT = () => {
    return <div className={s.messages_main}>
        <div className={s.wrapper}>
            <div className={s.messages_block}>
                <Message isMine={true}/>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message isMine={true}/>
            </div>
            <div className={s.message_bar}>
                <div className={s.icon_wrapper}>
                    <AiFillFileAdd/>
                </div>


                <input placeholder={'Message'} maxLength={60}/>
                <div className={s.send}>
                    <MdSend/>
                </div>
            </div>
        </div>
    </div>
}

export const Message : FC<{isMine?: boolean}> = ({isMine = false}) => {
    return <div className={cn(isMine ? s.my_message : s.opponent_message)}>
        <div className={s.wrapper}>
            <div className={s.title_wrapper}>
                <h4 className={s.title}>Some message</h4>
            </div>
            <div className={s.time_block}>
                <span>19:48</span>
                <BsCheck2/>
            </div>
        </div>
    </div>
}
// export const UserMessage : NCT = () => {
// }

export default MessagesMain
