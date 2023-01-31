import {FC} from 'react';
import s from './style.module.scss'
import {Message, TimeLabel} from "shared/ui";

const MessengerContent: FC = () => {
    return <div className={s.messages_block}>
        <div className={s.messages_wrapper}>
            <TimeLabel/>
            <Message isMine image={'/electronic_prewiew.svg'} message={'Hello'}/>
            <Message message={'Hi'}/>
            <Message message={'Hi'}/>
            <Message message={'Hi'}/>
            <Message message={'Hi'} isMine/>

        </div>
    </div>
}

export default MessengerContent
