import s from './style.module.scss'
import { ContainerTitle, RecommendedItemTall } from 'shared/ui/kit'
import { FC, memo } from 'react'
import { RecommendedItemProps } from 'widgets/Products'
import { Ternary } from 'shared/lib/components'
import { GridPreloader } from 'shared/ui/material'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'


const RecommendedItems = memo<RecommendedItemProps>(({ items }) => {
  const { t } = useTranslation()
  return <article className={cn(s.recommended_items, { [s.loading]: !items.length })}>
    <ContainerTitle>{t('Recommended_items')}</ContainerTitle>
    <div className={s.items_block}>
      <Ternary where={items.length}>
        <>
          {items.slice(0, 10).map((product) =>
            <RecommendedItemTall key={product.productId} product={product}/>)}
        </>
        <>
          <GridPreloader/>
        </>
      </Ternary>
    </div>
  </article>
})

export default RecommendedItems
