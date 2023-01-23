import React from 'react';
import s from './header.module.scss'
import Image from "next/image";
import cn from 'classnames'
import {FaHeart, FaInfo, FaShoppingCart, FaUserAlt, GiHamburgerMenu, MdMessage} from 'icons'
import Link from 'next/link'

const Header = () => {
    return <>
        <header className={s.header}>
            <div className={s.header_block}>
                <Link href={'/'}>
                    <div className={s.logo}>
                        <Image src={'/logo.svg'} alt={'Adonis'} priority={true} height={90} width={200}/>
                    </div>
                </Link>
                <div className={s.search}>
                    <input className={s.search_input} placeholder={'Search'}/>
                    <select className={cn(s.search_select, 'primary_select')}>
                        <option>All category</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                    </select>
                    <button className={cn(s.search_button, 'primary_button')}>Search</button>
                </div>
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
                    <a className={'hover_link'}><GiHamburgerMenu/> All category</a>
                    <a className={'hover_link'}><MdMessage/> Messages</a>
                    <a className={'hover_link'}><FaInfo/> About</a>
                </nav>
                <div className={s.dropdowns}>
                    <select className={cn(s.navbar_select, 'primary_select')}>
                        <option>English, USD</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                    </select>
                    <select className={cn(s.navbar_select, 'primary_select')}>
                        <option>Theme</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                    </select>
                </div>
            </div>
        </header>

    </>
}

export default Header
