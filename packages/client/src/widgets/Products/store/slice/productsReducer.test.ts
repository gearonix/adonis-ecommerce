import { JestRedux } from 'shared/lib/jest'
import { Store } from 'app/store/store'
import { productsInitialState, ProductsSlice } from 'shared/types/slices'
import { productsActions, productsSlice } from 'widgets/Products'
import { DeepPartial } from '@reduxjs/toolkit'
import { ProductsWithCount } from 'widgets/Products/types'


describe('productsReducer', () => {
  const tests = new JestRedux()
  let store: Store
  let state: ProductsSlice
  const initialState: ProductsSlice = {
    ...productsInitialState,
    isLoading: false,
    count: 12
  }

  beforeEach(() => {
    store = tests.configureTestStore('products', initialState)
    state = tests.createReducerState(store, 'products')
  })

  test('should work with initialState', () => {
    const newState = productsSlice(undefined, productsActions.changeFilter({ search: '4hxkvz' }))
    expect(newState.filter.search).toBe('4hxkvz')
  })
  test('clearProducts', () => {
    expect(productsSlice(state, productsActions.clearProducts())).toBe(productsInitialState)
  })
  test('changeFilter', () => {
    const params : any = {
      type: 'far',
      model: 'catch'
    }
    const newState = productsSlice(state, productsActions.changeFilter(params))
    expect(newState.filter.type).toBe('far')
    expect(newState.filter.model).toBe('catch')
    expect(newState.filter.page).toBe(0)
  })
  test('setProducts', () => {
    const products: ProductsWithCount = {
      data: ['test'] as any,
      count: 2
    }
    const newState = productsSlice(state, productsActions.setProducts(products))
    expect(newState.products[0]).toBeDefined()
    expect(newState.products[0]).toBe('test')
    expect(newState.count).toBe(2)
  })
})

