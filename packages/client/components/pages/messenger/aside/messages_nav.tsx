import {NCT} from 'types/global'
import s from './messages_nav.module.scss';
import {SearchInput} from "components/UIkit/mui/mui_components";
import {NextImage} from "components/UIkit/components";
import cn from "classnames";

const MessagesNav: NCT = () => {
    const users = [1, 2, 3, 4, 5, 5, 6]
    return <aside className={cn(s.messages_navbar, 'custom_scrollbar')}>
        <div className={s.search_wrapper}>
            <SearchInput/>
        </div>
        {users.map(i => {
            return <div className={cn(s.user)} key={i}>
                <div className={s.wrapper}>
                    <div className={s.image}>
                        <NextImage src={'/avatar.jpg'}/>
                    </div>
                    <div className={s.info}>
                        <h3>Test User</h3>
                        <span>Chadgram Web was updated.</span>
                    </div>
                    <div className={s.time}>
                        <span>19:48</span>
                        <div className={s.new_message}>1</div>
                    </div>
                </div>
            </div>
        })}
    </aside>
}

export const UserInfo: NCT = () => {
    return <div className={s.user_info_wrapper}>
        <div className={s.image}>
            <NextImage src={'/avatar.jpg'}/>
        </div>
        <div className={s.info}>
            <h3>Test User</h3>
            <span>offline</span>
        </div>
    </div>
}

export default MessagesNav
