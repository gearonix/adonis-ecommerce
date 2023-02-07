import {FC} from 'react';
import s from './style.module.scss';
import {SearchUsers} from 'features/Messenger/SearchUsers';
import {MessengerUser} from 'entities/Messenger/User';
import {SelectUser} from 'features/Messenger/SelectUser';

const Aside: FC = () => {
    return <aside className={s.messenger_aside}>
        <SearchUsers/>
        {[1, 2, 3, 4].map((i) => {
            return <MessengerUser SelectUser={SelectUser} key={i}/>;
        })}
    </aside>;
};

export default Aside;
