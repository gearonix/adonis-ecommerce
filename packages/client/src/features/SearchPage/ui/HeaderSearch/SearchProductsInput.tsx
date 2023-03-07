import { FC } from 'react'
import { searchDefaultValues } from '../../lib/defaultValues'
import { useDispatch, useSelector } from 'shared/types/redux'
import { productsActions } from 'widgets/Products'
import { useRouter } from 'next/router'
import { routes } from 'shared/config/consts/routes'
import { useForm } from 'shared/lib/hooks/useForm'
import { FieldValues, Helpers } from 'shared/lib/helpers'
import { HeaderInput } from 'shared/ui/kit'
import { ProductsSelectors } from 'shared/selectors'

interface SearchForm{
    search: string,
}

interface HeaderInputProps{
  Component: FC<{
    submit: () => void,
    values: FieldValues
  }>
}

const helpers = new Helpers()

const SearchProductsInput: FC<HeaderInputProps> = ({ Component }) => {
  const filter = useSelector(ProductsSelectors.filter)
  const { reg, submit } = useForm<SearchForm>(null, searchDefaultValues(filter.search))
  const dispatch = useDispatch()
  const router = useRouter()

  const onSearch = ({ search }: SearchForm) => {
    dispatch(productsActions.changeFilter({ search: helpers.toUndefined(search) }))

    if (router.pathname !== routes.SEARCH) {
      router.push(routes.SEARCH)
    }
  }


  return <Component submit={submit(onSearch)} values={reg('search')}/>
}


export default SearchProductsInput
