import { memo, useCallback } from 'react'
import DefaultValues from 'widgets/Products/lib/form/initialValues'
import { useDispatch } from 'shared/types/redux'
import { addProduct } from 'widgets/Products/store/thunks/addProduct/addProduct'
import { AddProductForm } from 'widgets/Products/types'
import { addProductSchema } from 'widgets/Products/lib/form/formSchemes'
import { useForm } from 'shared/lib/hooks'
import { AddProductTemplate } from 'entities/Profile'
import { ProductImages } from 'features/Profile'
import { productsActions } from 'widgets/Products'
import { WallPages } from 'widgets/Profile/types'

interface AddProductProps{
  cancel: () => void,
  setPage: (page: WallPages) => void
}

const AddProduct = memo<AddProductProps>(({ cancel, setPage }) => {
  const { form, reg } = useForm<AddProductForm>(addProductSchema, DefaultValues.addProduct())
  const dispatch = useDispatch()

  const onSubmit = useCallback((formValues: AddProductForm) => {
    dispatch(productsActions.changeFilter({ page: 0 }))
    dispatch(addProduct(formValues))
    cancel()
    setPage(WallPages.products)
  }, [])


  return <AddProductTemplate submitForm={form.handleSubmit(onSubmit)} cancel={cancel}
    ProductImages={ProductImages} reg={reg} />
})
export default AddProduct
