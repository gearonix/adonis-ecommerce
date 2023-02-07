import {FC} from 'react';
import s from './style.module.scss';
import {MessengerContentTemp} from 'entities/Messenger/Content';
import {MessageBar} from 'entities/Messenger/MessageBar';
import {MessageForm} from 'features/Messenger/MessageForm';

const MessengerContent: FC = () => {
    return <div className={s.messages_main}>
        <div className={s.wrapper}>
            <MessengerContentTemp/>
            <MessageBar MessageForm={MessageForm}/>
        </div>
    </div>;
};

export default MessengerContent;
