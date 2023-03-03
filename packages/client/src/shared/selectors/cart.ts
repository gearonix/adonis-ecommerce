import { AppState } from 'shared/types/redux'

const CartSelectors = {
  count: ({ cart }: AppState) => cart.length,
  productsByIds: ({ cart }: AppState) => cart,
  existsInCart: (id: number) => ({ cart }: AppState) => {
    return cart.includes(id)
  }
}

export default CartSelectors
