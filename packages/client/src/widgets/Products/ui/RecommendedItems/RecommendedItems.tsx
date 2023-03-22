import { FC, memo, useEffect, useState } from 'react'
import { useDispatch } from 'shared/types/redux'
import { getRecommendedProducts } from 'widgets/Products/store/thunks'
import { KeyOf } from 'shared/types/common'
import { ProductTypes } from 'shared/types/elements'
import { Product } from 'widgets/Products'

interface RecommendedItemsProps{
  Component: any,
  type?: KeyOf<typeof ProductTypes>,
  Icon?: FC
}

export interface RecommendedItemProps{
  items: Product[],
  type?: KeyOf<typeof ProductTypes>,
  Icon?: FC
}

const RecommendedItems= memo<RecommendedItemsProps>(({ Component, Icon, ...filter }) => {
  const dispatch = useDispatch()
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    dispatch(getRecommendedProducts(filter)).then(({ payload }) => {
      if (!payload) return
      setItems(payload as Product[])
    })
  }, [])

  return <Component items={items} Icon={Icon} {...filter}/>
})

export default RecommendedItems
