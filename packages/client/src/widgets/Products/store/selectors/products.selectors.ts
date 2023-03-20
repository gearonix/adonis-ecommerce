import { AppState } from 'shared/types/redux'
import { ProductsView } from 'widgets/Products/types'

const ProductsSelectors = {
  products: ({ products }: AppState) => products.products,
  total: ({ products }: AppState) => products.count,
  page: ({ products }: AppState) => products.filter.page,
  filter: ({ products }: AppState) => products.filter,
  length: ({ products }: AppState) => products.products.length,
  isLoading: ({ products }: AppState) => products.isLoading,
  isViewTransformed: ({ products }: AppState) =>
    products?.filter.view === ProductsView.TRANSFORMED
}


export default ProductsSelectors
