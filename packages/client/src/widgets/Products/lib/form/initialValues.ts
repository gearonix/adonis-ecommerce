import {
  ProductFeatures,
  ProductModels,
  ProductRatings,
  ProductSizes,
  ProductTypes
} from 'shared/types/elements/productTypes'

const initialValues = {
  addProduct() {
    return {
      defaultValues: {
        inStock: false,
        rating: 4 as ProductRatings,
        features: [],
        images: []
      },
      selectValues: {
        type: ProductTypes,
        model: ProductModels,
        size: ProductSizes,
        features: ProductFeatures
      }
    }
  },
  searchAside(type: any) {
    return {
      defaultValues: {
        type
      },
      selectValues: {
        model: ProductModels,
        size: ProductSizes,
        type: ProductTypes,
        rating: [5, 4, 3, 2, 1]
      }

    }
  }
}


export default initialValues
