import { FC } from 'react'
import { searchDefaultValues } from '../../lib/defaultValues'
import { useDispatch, useSelector } from 'shared/types/redux'
import { productsActions, ProductsSelectors } from 'widgets/Products'
import { useRouter } from 'next/router'
import { routes } from 'shared/config/consts/routes'
import { useForm } from 'shared/lib/hooks/useForm'
import { FieldValues, Helpers } from 'shared/lib/helpers'

interface SearchForm{
    search: string,
}

interface HeaderInputProps{
  Component: FC<{
    submit: () => void,
    values: FieldValues,
    form?: any
  }>
}

const helpers = new Helpers()

const SearchProductsInput: FC<HeaderInputProps> = ({ Component }) => {
  const filter = useSelector(ProductsSelectors.filter)
  const { reg, submit, getValues, form } = useForm<SearchForm>(null, searchDefaultValues(filter.search))
  const dispatch = useDispatch()
  const router = useRouter()

  const onSearch = ({ search }: SearchForm) => {
    dispatch(productsActions.changeFilter({ search: helpers.toUndefined(search) }))

    if (router.pathname !== routes.SEARCH) {
      router.push(routes.SEARCH)
    }
  }


  return <Component submit={submit(onSearch)} values={reg('search')} form={form}/>
}


export default SearchProductsInput
