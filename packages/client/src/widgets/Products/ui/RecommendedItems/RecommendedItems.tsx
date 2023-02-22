import {FC, useEffect, useState} from 'react'
import {useDispatch} from 'shared/types/redux'
import {getRecommendedProducts} from 'widgets/Products/store/thunks'
import {Product} from 'shared/types/slices'

interface RecommendedItemsProps{
  Component: FC<{items: Product[]}>
}

const RecommendedItems: FC<RecommendedItemsProps> = ({Component}) => {
  const dispatch = useDispatch()
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    dispatch(getRecommendedProducts()).then(({payload}) => {
      if (!payload) return
      setItems(payload as Product[])
    })
  }, [])

  return <Component items={items}/>
}

export default RecommendedItems
