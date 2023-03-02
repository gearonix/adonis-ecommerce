import {SearchAsideSkeleton} from 'entities/SearchPage/SearchAsideSkeleton'
import {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'shared/types/redux'
import {SearchControlsForm} from 'widgets/Products/types'
import initialValues from 'widgets/Products/lib/form/initialValues'
import {useForm} from 'shared/lib/hooks/common'
import {productsActions} from 'widgets/Products'
import productSelectors from 'shared/selectors/productsSelectors'

const SearchAside: FC = () => {
  const {type} = useSelector(productSelectors.filter)
  const {form, reg} = useForm<SearchControlsForm>(null, initialValues.searchAside(type))
  const dispatch = useDispatch()

  const onChange = () => {
    dispatch(productsActions.changeFilter({...form.getValues(), page: 0}))
  }

  useEffect(() => {
    const subscription = form.watch(onChange)
    return () => subscription.unsubscribe()
  }, [])


  return <SearchAsideSkeleton reg={reg}/>
}

export default SearchAside
