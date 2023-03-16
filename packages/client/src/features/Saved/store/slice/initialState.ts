import { Product } from 'widgets/Products/store/slice/initialState'

export interface SavedSlice{
    saved: number[],
    products: Product[],
    isLoading: boolean
}

export const savedInitialState: SavedSlice = {
  saved: [],
  products: [],
  isLoading: false
}
