import {SearchAsideSkeleton} from 'entities/SearchPage/SearchAsideSkeleton'
import {FC, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {createFieldValues, Helpers} from 'shared/lib/helpers/others'
import {useDispatch} from 'shared/types/redux'
import {getProducts} from 'widgets/Products/store/thunks/getProducts'
import {SearchControlsForm} from 'widgets/Products/types'
import initialValues from 'widgets/Products/lib/form/initialValues'

const SearchAside: FC = () => {
  const defaultValues = initialValues.searchAside()
  const form = useForm<SearchControlsForm>()
  const reg = createFieldValues<SearchControlsForm>(form, defaultValues.selectValues)
  const helpers = new Helpers()
  const dispatch = useDispatch()

  const onChange = () => {
    const filter = helpers.onlyDefinedValues(form.getValues())
    dispatch(getProducts(filter))
  }

  useEffect(onChange, [form.watch()])

  return <SearchAsideSkeleton reg={reg}/>
}

export default SearchAside
