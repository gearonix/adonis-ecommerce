import React, { FC, memo, useState } from 'react'
import s from './style.module.scss'
import { Button, CategoriesList, NextImage } from 'shared/ui/kit'
import { ProductTypesKeys } from 'shared/types/elements/productTypes'
import { useDispatch, useSelector } from 'shared/types/redux'
import { AuthSelectors } from 'shared/selectors'
import { DefaultAssets, ProductTypesAssets } from 'shared/config/consts/assets'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'
import { AiOutlineFileSearch, AiOutlineShoppingCart } from 'shared/ui/icons'
import { Display, Ternary, WithSpring } from 'shared/lib/components'
import { useRouter } from 'next/router'
import { productsActions } from 'widgets/Products'
import { ProductTypesTitles } from 'widgets/Banners/lib/productTitles'
import { Nullable } from 'shared/types/common'
import { backgroundImage } from 'shared/lib/helpers'


interface CategoriesProps{
  userName: Nullable<string>,
  avatar: Nullable<string>,
  isAuthorized: Nullable<boolean>,
  category: ProductTypesKeys,
  setCategory: (key: ProductTypesKeys) => void,
  onSearch: () => void
}


const Categories: FC<CategoriesProps> = memo((props) => {
  const { userName, category, setCategory,
    avatar, isAuthorized, onSearch } = props

  const { title, subtitle } = ProductTypesTitles[category]

  return <article className={s.categories}>
    <CategoriesList value={category} setValue={setCategory}/>
    <WithSpring key={category} type={'opacityHeight'}
      className={s.image_block} param={390}
      style={backgroundImage(ProductTypesAssets[category])}>
      <h2 className={s.subtitle}>{subtitle}</h2>
      <h2 className={s.title}>{title}</h2>
      <Button w={'112px'} color={'outlined'} onClick={onSearch}>Learn more</Button>
    </WithSpring>
    <div className={s.login_block}>
      <div className={s.user_block}>
        <div className={s.user_block_container}>
          <div className={s.hi_user}>
            <div className={s.image_wrapper}>
              <NextImage src={avatar} def={DefaultAssets.AVATAR}/>
            </div>
            <Ternary where={isAuthorized}>
              <div className={s.user_title}>Hey, {userName}.<br/>
                Welcome back!
              </div>
              <div className={s.user_title}>Hey!<br/>
              Let&apos;s get started!
              </div>
            </Ternary>
          </div>
        </div>
        <Display when={!isAuthorized}>
          <Link href={routes.SIGNUP}>
            <Button w={'90%'} h={'30px'}>Join now</Button>
          </Link>
          <Link href={routes.LOGIN}>
            <Button w={'90%'} h={'30px'} color={'outlined'}>Log in</Button>
          </Link>
        </Display>
      </div>
      <Link href={routes.SEARCH}>
        <div className={s.greenCard}>
          <h4>The best goods for sports! <br/>
            Get your discount! <AiOutlineShoppingCart/></h4>
        </div>
      </Link>
      <Link href={routes.SEARCH}>
        <div className={s.card}>
          <h4>The best electronics store is open!</h4>
        </div>
      </Link>
      <Display when={isAuthorized}>
        <Link href={routes.SEARCH}>
          <div className={s.greenCard}>
            <h4>Look how many products we have! <AiOutlineFileSearch/></h4>
          </div>
        </Link>
      </Display>
    </div>

  </article>
})


export default Categories
