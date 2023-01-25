import {NCT} from 'types/global'
import s from './main.module.scss';
import {AiFillFileAdd, MdSend} from "icons";
import { BsCheck2 } from 'icons';
import {FC, useState} from "react";
import cn from "classnames";
import {NextImage} from "components/UIkit/components";
import {ImageModal} from "components/UIkit/mui/mui_components";

const MessagesMain: NCT = () => {
    return <div className={s.messages_main}>
        <div className={s.wrapper}>
            <div className={s.messages_block}>
                <div className={s.messages_wrapper}>
                    <div className={s.today_label}>Today</div>
                    <Message isMine={true} image={'/recommended.svg'} message={'Hello'}/>
                    <Message message={'Hi'}/>
                </div>
            </div>
            <MessageBar/>
        </div>
    </div>
}


interface MessageProps{
    isMine?: boolean,
    message: string,
    image?: string
}

export const Message : FC<MessageProps> = ({isMine = false, image,message}) => {
    const [isOpened,openModal] = useState<boolean>(false)
    return <div className={cn(isMine ? s.my_message : s.opponent_message)}>
        {image &&  <ImageModal isOpen={isOpened} handleOpen={openModal} image={image} />}
        <div className={s.wrapper}>
            {image &&  <div className={s.image_wrapper} onClick={() => openModal(true)}>
                <NextImage src={image} />
            </div>
            }
            <div className={s.title_wrapper}>
                <h4 className={s.title}>{message}</h4>
            </div>
            <div className={s.time_block}>
                <span>19:48</span>
                <BsCheck2/>
            </div>
        </div>
    </div>
}

export const MessageBar: FC<{placeholder?: string}> = ({placeholder  = 'Message'}) => {
    return <div className={s.message_bar}>
        <div className={s.icon_wrapper}>
            <AiFillFileAdd/>
        </div>
        <input placeholder={placeholder} maxLength={60}/>
        <div className={s.send}>
            <MdSend/>
        </div>
    </div>
}


export default MessagesMain
