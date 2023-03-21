import { FC, memo, useEffect, useState } from 'react'
import { useDispatch } from 'shared/types/redux'
import { getRecommendedProducts } from 'widgets/Products/store/thunks'
import { KeyOf } from 'shared/types/common'
import { ProductTypes } from 'shared/types/elements'
import { Product } from 'widgets/Products'

interface RecommendedItemsProps{
  Component: any,
  type?: KeyOf<typeof ProductTypes>
}

export interface RecommendedItemProps{
  items: Product[],
  type?: KeyOf<typeof ProductTypes>
}

const RecommendedItems= memo<RecommendedItemsProps>(({ Component, ...filter }) => {
  const dispatch = useDispatch()
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    dispatch(getRecommendedProducts(filter)).then(({ payload }) => {
      if (!payload) return
      setItems(payload as Product[])
    })
  }, [])

  return <Component items={items} {...filter}/>
})

export default RecommendedItems
