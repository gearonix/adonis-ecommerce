import {FC, useEffect, useState} from 'react'
import {useDispatch} from 'shared/types/redux'
import {getRecommendedProducts} from 'widgets/Products/store/thunks'
import {Product} from 'shared/types/slices'
import {KeyOf} from 'shared/types/common'
import {ProductTypes} from 'shared/types/elements'

interface RecommendedItemsProps{
  Component: FC<RecommendedItemProps>,
  type?: KeyOf<typeof ProductTypes>
}

export interface RecommendedItemProps{
  items: Product[],
  type?: KeyOf<typeof ProductTypes>
}

const RecommendedItems: FC<RecommendedItemsProps> = ({Component, ...filter}) => {
  const dispatch = useDispatch()
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    dispatch(getRecommendedProducts(filter)).then(({payload}) => {
      if (!payload) return
      setItems(payload as Product[])
    })
  }, [])

  return <Component items={items} {...filter}/>
}

export default RecommendedItems
