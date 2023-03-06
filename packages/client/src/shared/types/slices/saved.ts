import { Product } from 'shared/types/slices/products'

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
