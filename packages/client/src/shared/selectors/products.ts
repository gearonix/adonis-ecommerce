import { AppState } from 'shared/types/redux'

const ProductsSelectors = {
  products: ({ products }: AppState) => products.products,
  total: ({ products }: AppState) => products.count,
  page: ({ products }: AppState) => products.filter.page,
  filter: ({ products }: AppState) => products.filter
}


export default ProductsSelectors
