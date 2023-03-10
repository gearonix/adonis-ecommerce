import { JestRedux } from 'shared/lib/jest'
import { Store } from 'shared/types/redux'
import { ProductsSelectors } from 'shared/selectors'
import { ProductsSlice } from 'shared/types/slices'


describe('ProductsSelectors', () => {
  const tests = new JestRedux()
  let store: Store
  let state: ProductsSlice
  const initialState: Partial<ProductsSlice> = {
    products: [1, 2, 3] as any,
    count: 12,
    filter: {
      page: 2
    } as any,
    isLoading: true
  }

  beforeEach(() => {
    store = tests.configureTestStore('products', initialState)
    state = tests.createReducerState(store, 'products')
  })

  test('products', () => {
    expect(ProductsSelectors.products(tests.selector('products', state))).toStrictEqual(state.products)
  })
  test('total', () => {
    expect(ProductsSelectors.total(tests.selector('products', state))).toBe(12)
  })
  test('page', () => {
    expect(ProductsSelectors.page(tests.selector('products', state))).toBe(2)
  })
  test('length', () => {
    expect(ProductsSelectors.length(tests.selector('products', state))).toBe(3)
  })
  test('isLoading', () => {
    expect(ProductsSelectors.isLoading(tests.selector('products', state))).toBeTruthy()
  })
})

