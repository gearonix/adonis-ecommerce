import {FC} from 'react';
import s from './style.module.scss';
import {FaHeart, FaInfo, FaShoppingCart, FaUserAlt, GiHamburgerMenu, MdMessage} from 'icons'
import Link from 'next/link'
import {HoverLink, Logo} from 'shared/ui';
import {HeaderSkeletonProps} from '../types'


const HeaderSkeleton: FC<HeaderSkeletonProps> = ({Search, DropDowns}) => {
    return <>
        <header className={s.header}>
            <div className={s.header_block}>
                <Link href={'/'}>
                    <Logo/>
                </Link>
                <Search/>
                <div className={s.options}>
                    <div className={s.options_item}>
                        <FaUserAlt/>
                        <span>Profile</span>
                    </div>
                    <div className={s.options_item}>
                        <MdMessage/>
                        <span>Message</span>
                    </div>
                    <div className={s.options_item}>
                        <FaHeart/>
                        <span>Orders</span>
                    </div>
                    <div className={s.options_item}>
                        <FaShoppingCart/>
                        <span>My cart</span>
                    </div>
                </div>
            </div>
            <div className={s.navbar_block}>
                <nav className={s.navbar}>
                    <HoverLink><GiHamburgerMenu/> All category</HoverLink>
                    <HoverLink><MdMessage/> Messages</HoverLink>
                    <HoverLink><FaInfo/> About</HoverLink>
                </nav>
                <DropDowns/>
            </div>
        </header>

    </>
}

export default HeaderSkeleton
