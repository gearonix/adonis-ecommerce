import { FC, useEffect, useState } from 'react'
import { MutableProductTypes, ProductTypes, ProductTypesKeys } from 'shared/types/elements/productTypes'
import { useDispatch, useSelector } from 'shared/types/redux'
import { AuthSelectors } from 'shared/selectors'
import { routes } from 'shared/config/consts/routes'
import { useRouter } from 'next/router'
import { productsActions } from 'widgets/Products'
import { Categories as CategoriesTemplate } from 'entities/Banners'
import { Helpers } from 'shared/lib/helpers'
import { useInterval } from 'shared/lib/hooks'

const Categories: FC = () => {
  const [category, setCategory] = useState<ProductTypesKeys>('Electronics')
  const { avatar, isAuthorized } = useSelector(AuthSelectors.user)
  const userName = useSelector(AuthSelectors.userName)
  const router = useRouter()
  const dispatch = useDispatch()
  const helpers = new Helpers()

  useInterval(() => {
    const newCategory = helpers.nextItem(ProductTypes as MutableProductTypes, category)
    setCategory(newCategory)
  }, 7)

  const onSearch = () => {
    dispatch(productsActions.changeFilter({ type: category }))
    router.push(routes.SEARCH)
  }
  return <CategoriesTemplate category={category}
    setCategory={setCategory} avatar={avatar}
    userName={userName} isAuthorized={isAuthorized} onSearch={onSearch}/>
}


export default Categories
