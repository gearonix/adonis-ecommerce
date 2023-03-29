import { FC, memo } from 'react'
import s from './style.module.scss'
import { BlueLink, Button, ContainerTitle, RecommendedItem } from 'shared/ui/kit'
import { routes } from 'shared/config/consts/routes'
import { productsActions, RecommendedItemProps } from 'widgets/Products'
import { useDispatch } from 'shared/types/redux'
import { useRouter } from 'next/router'
import { RecommendedPreloader } from 'shared/ui/material'
import { backgroundImage, publicAssets } from 'shared/lib/helpers'
import { ProductTypesAssets } from 'shared/config/consts/assets'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import { AiOutlineArrowRight } from 'react-icons/ai'


const SortedProducts = memo<RecommendedItemProps>(({ type = 'Electronics', items, Icon }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { t } = useTranslation()

  const onSearch = () => {
    dispatch(productsActions.changeFilter({ type }))
    router.push(routes.SEARCH)
  }

  return <div className={s.recommended}>
    <ContainerTitle className={cn(s.mobile_header)}>{Icon && <Icon/>} {t(type)}</ContainerTitle>
    <div className={s.image_block}
      style={backgroundImage(publicAssets(ProductTypesAssets[type]))}>
      <div className={s.title}>{t(type)}</div>

      <Button w={'119px'} color={'outlined'} onClick={onSearch}>{t('Source_now')}</Button>
    </div>
    <div className={s.recommended_items}>
      {items.length ? items.slice(0, 8).map((product, idx) => <RecommendedItem product={product}
        key={`${product.productId}_${idx}`}/>) : <RecommendedPreloader/>}
    </div>
    <BlueLink className={s.source_now} onClick={onSearch}>
      {t('Source_now')} <AiOutlineArrowRight/>
    </BlueLink>
  </div>
})


export default SortedProducts
