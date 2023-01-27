import {FC, useState} from 'react';
import s from './style.module.scss'
import cn from "classnames";
import {ImageModal} from "mui";
import {NextImage} from "shared/ui";
import {BsCheck2} from "icons";
import {MessageProps} from "../../types";


export const Message: FC<MessageProps> = ({isMine = false, image, message}) => {
    const [isOpened, openModal] = useState<boolean>(false)
    return <div className={cn(isMine ? s.my_message : s.opponent_message)}>
        {image && <ImageModal isOpen={isOpened} handleOpen={openModal} image={image}/>}
        <div className={s.wrapper}>
            {image && <div className={s.image_wrapper} onClick={() => openModal(true)}>
                <NextImage src={image}/>
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

export default Message
