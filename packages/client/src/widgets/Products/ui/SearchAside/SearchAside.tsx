import {SearchAsideSkeleton} from 'entities/SearchPage/SearchAsideSkeleton'
import {FC, useEffect} from 'react'
import {Helpers} from 'shared/lib/helpers/others'
import {useDispatch} from 'shared/types/redux'
import {getProducts} from 'widgets/Products/store/thunks/getProducts'
import {SearchControlsForm} from 'widgets/Products/types'
import initialValues from 'widgets/Products/lib/form/initialValues'
import {useForm} from 'shared/lib/helpers/hooks/common'
import {useRouter} from 'next/router'
import {productsActions} from 'widgets/Products'

const SearchAside: FC = () => {
  const router = useRouter()
  const {form, reg} = useForm<SearchControlsForm>(null, initialValues.searchAside(router.query))
  const helpers = new Helpers()
  const dispatch = useDispatch()

  const onChange = () => {
    const filter = helpers.partial(form.getValues())
    if (helpers.isObjectEmpty(filter)) return

    dispatch(productsActions.setProductsPage(0))

    dispatch(getProducts(filter))
  }

  useEffect(onChange, [form.watch()])

  return <SearchAsideSkeleton reg={reg}/>
}

export default SearchAside
