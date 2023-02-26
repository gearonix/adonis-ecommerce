import {AppState} from 'shared/types/redux'

const CartSelectors = {
  count: ({cart}: AppState) => cart.length,
  ids: ({cart}: AppState) => cart,
}

export default CartSelectors
