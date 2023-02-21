import {createThunk} from 'shared/types/redux'
import {UploadProperties} from 'app/config/globals'
import {withFormData} from 'shared/lib/helpers/others'
import {AddProductForm} from 'widgets/Products/types'
import {ProductsApi} from 'widgets/Products/productsApi'


export const addProduct = createThunk('products/ADD_PRODUCT',
    async (formValues: AddProductForm, {dispatch}) => {
      const createFormData = withFormData(UploadProperties.PRODUCT_IMAGES)
      const images = createFormData(...formValues.images)

      let response = await ProductsApi.addProduct(formValues)


      const productId = response.data.productId

      response = await ProductsApi.setProductImages(productId, images)

      const newProduct = response.data

      console.log(newProduct)
    })
