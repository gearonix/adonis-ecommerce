import React, { FC, memo } from 'react'
import s from './style.module.scss'
import { Button, CategoriesList, NextImage } from 'shared/ui/kit'
import { ProductTypesKeys } from 'shared/types/elements/productTypes'
import { DefaultAssets, ProductTypesAssets } from 'shared/config/consts/assets'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'
import { AiOutlineFileSearch, AiOutlineShoppingCart } from 'shared/ui/icons'
import { Display, Ternary, WithSpring } from 'shared/lib/components'
import { ProductTypesTitles } from 'widgets/Banners/lib/productTitles'
import { Nullable } from 'shared/types/common'
import { backgroundImage } from 'shared/lib/helpers'
import { useTranslation } from 'react-i18next'


interface CategoriesProps{
  userName: Nullable<string>,
  avatar: Nullable<string>,
  isAuthorized: Nullable<boolean>,
  category: ProductTypesKeys,
  setCategory: (key: ProductTypesKeys) => void,
  onSearch: () => void
}


const Categories= memo<CategoriesProps>((props) => {
  const { userName, category, setCategory,
    avatar, isAuthorized, onSearch } = props
  const { t } = useTranslation()

  const { title, subtitle } = ProductTypesTitles[category]

  return <article className={s.categories}>
    <CategoriesList value={category} setValue={setCategory}/>
    <WithSpring key={category} type={'opacityHeight'}
      className={s.image_block} param={390}
      style={backgroundImage(ProductTypesAssets[category])}>
      <h2 className={s.subtitle}>{t(subtitle)}</h2>
      <h2 className={s.title}>{t(title)}</h2>
      <Button w={'112px'} color={'outlined'} onClick={onSearch}>{t('Learn_more')}</Button>
    </WithSpring>
    <div className={s.login_block}>
      <div className={s.user_block}>
        <div className={s.user_block_container}>
          <div className={s.hi_user}>
            <div className={s.image_wrapper}>
              <NextImage src={avatar} def={DefaultAssets.AVATAR}/>
            </div>
            <Ternary where={isAuthorized}>
              <div className={s.user_title}>{t('Hey')} {userName}.<br/>
                {t('Welcome_back')}
              </div>
              <div className={s.user_title}>{t('Hey')}<br/>
                {t('Lets_get')}
              </div>
            </Ternary>
          </div>
        </div>
        <Display when={!isAuthorized}>
          <Link href={routes.SIGNUP}>
            <Button w={'90%'} h={'30px'}>{t('Join_now')}</Button>
          </Link>
          <Link href={routes.LOGIN}>
            <Button w={'90%'} h={'30px'} color={'outlined'}>{t('Log_in')}</Button>
          </Link>
        </Display>
      </div>
      <Link href={routes.SEARCH}>
        <div className={s.greenCard}>
          <h4>{t('Best_goods')} <br/>
            {t('Get_your')} <AiOutlineShoppingCart/></h4>
        </div>
      </Link>
      <Link href={routes.SEARCH}>
        <div className={s.card}>
          <h4>{t('The_best')}</h4>
        </div>
      </Link>
      <Display when={isAuthorized}>
        <Link href={routes.SEARCH}>
          <div className={s.greenCard}>
            <h4>{t('Look_how_many')}<AiOutlineFileSearch/></h4>
          </div>
        </Link>
      </Display>
    </div>

  </article>
})


export default Categories
