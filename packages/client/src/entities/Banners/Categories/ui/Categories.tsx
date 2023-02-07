import React, {FC} from 'react';
import s from './style.module.scss';
import Image from 'next/image';
import {Button, CategoriesList} from 'shared/ui';


const Categories: FC = () => {
    return <article className={s.categories}>
        <CategoriesList/>
        <div className={s.image_block}>
            <h2 className={s.subtitle}>Latest trending</h2>
            <h2 className={s.title}>Electronic items</h2>
            <Button w={'112px'} color={'outlined'}>Learn more</Button>
        </div>
        <div className={s.login_block}>
            <div className={s.user_block}>
                <div className={s.user_block_container}>
                    <div className={s.hi_user}>
                        <Image width={44} height={44} src={'/avatar.jpg'} alt={'Electronic'}
                               priority={false}/>
                        <div className={s.user_title}>Hi user <br/>
                            let&apos;s get started
                        </div>
                    </div>
                </div>
                <Button w={'90%'} h={'30px'}>Join now</Button>
                <Button w={'90%'} h={'30px'} color={'outlined'}>Log in</Button>
            </div>
            <div className={s.card}>
                <h4>Get US $10 off with a new supplier</h4>
            </div>
            <div className={s.greenCard}>
                <h4>Send quotes with supplier preferences</h4>
            </div>
        </div>

    </article>;
};

export default Categories;
