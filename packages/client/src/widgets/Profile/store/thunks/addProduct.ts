import {createThunk} from 'shared/types/redux'
import {AddProductForm} from 'widgets/Profile/types'
import {UploadProperties} from 'app/config/globals'
import {withFormData} from 'shared/lib/helpers/others'
import Endpoints from 'shared/config/endpoints'
import axiosInstance from 'shared/config/axios'

const endpoint = Endpoints.PRODUCTS

export const addProduct = createThunk('products/ADD_PRODUCT',
    async (formValues: AddProductForm, {dispatch}) => {
      const createFormData = withFormData(UploadProperties.PRODUCT_IMAGES)
      const formData = createFormData(...formValues.images)

      const test = await axiosInstance.post(endpoint.setProductImages, formData)

      console.log(test.data)

      // const response = await axiosInstance.post(endpoint.createProduct, formValues)

      // console.log(response.data)
    })
