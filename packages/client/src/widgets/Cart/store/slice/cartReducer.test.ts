import { JestRedux } from 'shared/lib/jest'
import { Store } from 'app/store/store'
import {CartSlice, cartSlice } from 'widgets/Cart'
import { cartActions } from 'widgets/Cart/store/slice/cartReducer'


describe('cartReducer', () => {
  const tests = new JestRedux()
  let store: Store
  let state: CartSlice
  const initialState: Partial<CartSlice> = {
    data: [1, 4, 5]
  }

  beforeEach(() => {
    store = tests.configureTestStore('cart', initialState)
    state = tests.createReducerState(store, 'cart')
  })

  test('addProduct', () => {
    expect(cartSlice(state, cartActions.addProduct(2)).data).toContain(2)
    expect(cartSlice(state, cartActions.addProduct(2)).data).not.toContain(6)
  })
  test('addProduct with existing value', () => {
    expect(cartSlice(state, cartActions.addProduct(4)).data).toHaveLength(3)
  })
  test('removeProduct', () => {
    expect(cartSlice(state, cartActions.removeProduct(4)).data).not.toContain(4)
    expect(cartSlice(state, cartActions.removeProduct(4)).data).toContain(5)
  })
  test('removeAll', () => {
    expect(cartSlice(state, cartActions.removeAll()).data).toHaveLength(0)
  })
})

