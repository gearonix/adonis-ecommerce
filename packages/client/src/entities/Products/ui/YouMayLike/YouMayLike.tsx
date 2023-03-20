import { FC, memo } from 'react'
import s from './style.module.scss'
import { YouMayLikeItem } from 'shared/ui/kit'
import { RecommendedItemProps } from 'widgets/Products'
import { Ternary } from 'shared/lib/components'
import { YouMayLikePreloader } from 'shared/ui/material/components/Loaders/YouMayLikePreloader'
import { useTranslation } from 'react-i18next'


const YouMayLike = memo<RecommendedItemProps>(({ items }) => {
  const { t } = useTranslation()
  return <article className={s.you_may_like}>
    <h4 className={s.heading}>{t('You_may')}</h4>
    <Ternary where={items.length}>
      <>
        {items.slice(0, 5).map((product) => {
          return <YouMayLikeItem key={product.productId} product={product}/>
        })}
      </>
      <YouMayLikePreloader/>
    </Ternary>
  </article>
})

export default YouMayLike
