import {FC} from 'react'
import {AddProductTemplate} from 'entities/Profile/AddProduct'
import {ProductImages} from 'features/Profile/ProductImage'
import {useForm} from 'react-hook-form'
import {AddProductForm} from 'widgets/Profile/types'
import {yupResolver} from '@hookform/resolvers/yup'
import {addProductSchema} from 'widgets/Profile/lib/form/formSchemes'
import {createFieldValues} from 'shared/lib/helpers/others'
import DefaultValues from 'widgets/Profile/lib/form/initialValues'
import {useDispatch} from 'shared/types/redux'
import {addProduct} from 'widgets/Profile/store/thunks/addProduct'

const AddProduct: FC<{ cancel: () => void }> = ({cancel}) => {
  const {defaultValues, selectValues} = DefaultValues.addProduct()
  const form = useForm<AddProductForm>({resolver: yupResolver(addProductSchema), defaultValues})
  const reg = createFieldValues<AddProductForm>(form, selectValues)
  const dispatch = useDispatch()

  const onSubmit = (formValues: AddProductForm) => {
    console.log(formValues)
    dispatch(addProduct(formValues))
  }


  return <AddProductTemplate submitForm={form.handleSubmit(onSubmit)} cancel={cancel}
    ProductImages={ProductImages} reg={reg} />
}

export default AddProduct
