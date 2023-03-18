import { FC, memo, useCallback } from 'react'
import DefaultValues from 'widgets/Products/lib/form/initialValues'
import { useDispatch } from 'shared/types/redux'
import { addProduct } from 'widgets/Products/store/thunks/addProduct/addProduct'
import { AddProductForm } from 'widgets/Products/types'
import { addProductSchema } from 'widgets/Products/lib/form/formSchemes'
import { useForm } from 'shared/lib/hooks'
import { AddProductTemplate } from 'entities/Profile'
import { ProductImages } from 'features/Profile'
import { productsActions } from 'widgets/Products'

interface AddProductProps{
  cancel: () => void
}

const AddProduct = memo<AddProductProps>(({ cancel }) => {
  const { form, reg } = useForm<AddProductForm>(addProductSchema, DefaultValues.addProduct())
  const dispatch = useDispatch()

  const onSubmit = useCallback((formValues: AddProductForm) => {
    dispatch(productsActions.changeFilter({ page: 0 }))
    dispatch(addProduct(formValues))
    cancel()
  }, [])


  return <AddProductTemplate submitForm={form.handleSubmit(onSubmit)} cancel={cancel}
    ProductImages={ProductImages} reg={reg} />
})
export default AddProduct
