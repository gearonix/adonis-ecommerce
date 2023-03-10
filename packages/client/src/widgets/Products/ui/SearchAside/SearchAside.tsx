import { SearchAside as SearchAsideTemplate } from 'entities/SearchPage'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'shared/types/redux'
import { SearchControlsForm } from 'widgets/Products/types'
import initialValues from 'widgets/Products/lib/form/initialValues'
import { productsActions } from 'widgets/Products'
import productSelectors from 'shared/selectors/products/products.selectors'
import { useForm } from 'shared/lib/hooks/useForm'

const SearchAside: FC = () => {
  const { type } = useSelector(productSelectors.filter)
  const { form, reg } = useForm<SearchControlsForm>(null, initialValues.searchAside(type))
  const dispatch = useDispatch()

  const onChange = () => {
    dispatch(productsActions.changeFilter({ ...form.getValues(), page: 0 }))
  }

  useEffect(() => {
    const sub = form.watch(onChange)
    return () => sub.unsubscribe()
  }, [])


  return <SearchAsideTemplate reg={reg}/>
}

export default SearchAside
