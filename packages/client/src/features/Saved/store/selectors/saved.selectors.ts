import { AppState } from 'shared/types/redux'

const SavedSelectors = {
  saved: ({ saved }: AppState) => saved.saved,
  isInSaved: (productId: number) => ({ saved }: AppState) => {
    return saved.saved.includes(productId)
  },
  products: ({ saved }: AppState) => saved.products,
  count: ({ saved }: AppState) => saved.saved.length,
  isLoading: ({ saved }: AppState) => saved.isLoading

}


export default SavedSelectors
