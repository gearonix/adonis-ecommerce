import {createThunk} from 'shared/types/redux'
import {UploadProperties} from 'app/config/globals'
import {withFormData} from 'shared/lib/helpers/others'
import {AddProductForm} from 'widgets/Products/types'
import {ProductsApi} from 'widgets/Products/productsApi'
import {getUserProducts} from 'widgets/Products'


export const addProduct = createThunk('products/ADD_PRODUCT',
    async (formValues: AddProductForm, {dispatch}) => {
      const createFormData = withFormData(UploadProperties.PRODUCT_IMAGES)
      const images = createFormData(...formValues.images)

      const response = await ProductsApi.addProduct(formValues)

      const productId = response.data.productId

      await ProductsApi.setProductImages(productId, images)

      dispatch(getUserProducts(0))
    })
