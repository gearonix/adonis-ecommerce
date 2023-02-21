import {FC} from 'react'
import {AddProductTemplate} from 'entities/Profile/AddProduct'
import {ProductImages} from 'features/Profile/ProductImage'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {createFieldValues} from 'shared/lib/helpers/others'
import DefaultValues from 'widgets/Products/lib/form/initialValues'
import {useDispatch} from 'shared/types/redux'
import {addProduct} from 'widgets/Products/store/thunks/addProduct'
import {AddProductForm} from 'widgets/Products/types'
import {addProductSchema} from 'widgets/Products/lib/form/formSchemes'

const AddProduct: FC<{ cancel: () => void }> = ({cancel}) => {
  const {defaultValues, selectValues} = DefaultValues.addProduct()
  const form = useForm<AddProductForm>({resolver: yupResolver(addProductSchema), defaultValues})
  const reg = createFieldValues<AddProductForm>(form, selectValues)
  const dispatch = useDispatch()

  const onSubmit = (formValues: AddProductForm) => {
    dispatch(addProduct(formValues))
    cancel()
  }


  return <AddProductTemplate submitForm={form.handleSubmit(onSubmit)} cancel={cancel}
    ProductImages={ProductImages} reg={reg} />
}

export default AddProduct
