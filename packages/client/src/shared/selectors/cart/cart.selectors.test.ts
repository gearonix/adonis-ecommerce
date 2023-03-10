import { JestRedux } from 'shared/lib/jest'
import { Store } from 'shared/types/redux'
import { AuthSlice, CartSlice } from 'shared/types/slices'
import { CartSelectors } from 'shared/selectors'


describe('CartSelectors', () => {
  const tests = new JestRedux()
  let store: Store
  let state: CartSlice
  const initialState: Partial<CartSlice> = {
    data: [2, 3, 4]
  }

  beforeEach(() => {
    store = tests.configureTestStore('cart', initialState)
    state = tests.createReducerState(store, 'cart')
  })

  test('Count', () => {
    expect(CartSelectors.count(tests.selector('cart', state))).toBe(3)
  })
  test('existsInCart', () => {
    expect(CartSelectors.existsInCart(2)(tests.selector('cart', state))).toBeTruthy()
    expect(CartSelectors.existsInCart(5)(tests.selector('cart', state))).toBeFalsy()
    delete state.data[1]
    expect(CartSelectors.existsInCart(3)(tests.selector('cart', state))).toBeFalsy()
  })
})

