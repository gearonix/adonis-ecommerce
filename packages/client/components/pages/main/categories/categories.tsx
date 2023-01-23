import s from './categories.module.scss'
import Image from "next/image";
import cn from 'classnames'

const Categories = () => {
    return <article className={s.categories}>
        <div className={s.list}>
            <h2 className={s.list_item} id='active'>Item</h2>
            <h2 className={s.list_item}>Item</h2>
            <h2 className={s.list_item}>Item</h2>
            <h2 className={s.list_item}>Item</h2>
            <h2 className={s.list_item}>Item</h2>
            <h2 className={s.list_item}>Item</h2>
            <h2 className={s.list_item}>Item</h2>
            <h2 className={s.list_item}>Item</h2>
        </div>
        <div className={s.image_block}>
            <h2 className={s.subtitle}>Latest trending</h2>
            <h2 className={s.title}>Electronic items</h2>
            <button className={cn('outlined_button', s.learn_more)}>Learn more</button>
        </div>
        <div className={s.login_block}>
            <div className={s.user_block}>
                <div className={s.user_block_container}>
                    <div className={s.hi_user}>
                        <Image width={44} height={44} src={'/avatar.jpg'} alt={'Electronic'}/>
                        <div className={s.user_title}>Hi user <br/>
                            let's get started
                        </div>
                    </div>

                </div>
                <button className={cn(s.login_button, 'primary_button')}>Join now</button>
                <button className={cn(s.login_button, 'outlined_button')}>Log in</button>
            </div>
            <div className={s.card}>
                <h4>Get US $10 off with a new supplier</h4>
            </div>
            <div className={s.greenCard}>
                <h4>Send quotes with supplier preferences</h4>
            </div>
        </div>

    </article>
}

export default Categories
