import { AppState } from 'shared/types/redux'

const CartSelectors = {
  count: ({ cart }: AppState) => cart.data.length,
  productsByIds: ({ cart }: AppState) => cart.data,
  existsInCart: (id: number) => ({ cart }: AppState) => {
    return cart.data.includes(id)
  }
}

export default CartSelectors
