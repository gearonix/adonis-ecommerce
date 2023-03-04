import { createThunk } from 'shared/types/redux'
import { UploadProperties } from 'app/config/globals'
import { AddProductForm } from 'widgets/Products/types'
import { productsApi } from 'widgets/Products/api'
import { getUserProducts } from 'widgets/Products'
import { withFormData } from 'shared/lib/helpers/withHelpers/withFormData'


export const addProduct = createThunk('products/ADD_PRODUCT',
    async (formValues: AddProductForm, { dispatch }) => {
      const createFormData = withFormData(UploadProperties.PRODUCT_IMAGES)
      const images = createFormData(...formValues.images)

      const response = await productsApi.addProduct(formValues)

      const productId = response.data.productId

      await productsApi.setProductImages(productId, images)

      dispatch(getUserProducts(0))
    })
