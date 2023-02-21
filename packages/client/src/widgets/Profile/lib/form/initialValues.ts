import {
    ProductFeatures,
    ProductModels,
    ProductRatings,
    ProductSizes,
    ProductTypes,
} from 'widgets/Profile/lib/consts/productTypes'

const initialValues = {
  addProduct() {
    return {
      defaultValues: {
        inStock: false,
        rating: 4 as ProductRatings,
        features: [],
        images: [],
      },
      selectValues: {
        type: ProductTypes,
        model: ProductModels,
        size: ProductSizes,
        features: ProductFeatures,
      },
    }
  },
}


export default initialValues
