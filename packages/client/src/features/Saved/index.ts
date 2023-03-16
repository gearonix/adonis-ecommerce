export { default as SearchSaved } from './ui/AddToSaved/Search/SearchSaved'
export { default as ProductSaved } from './ui/AddToSaved/Product/ProductSaved'
export { default as CartSaved } from './ui/AddToSaved/Cart/CartSaved'
export { default as RemoveFromSaved } from './ui/RemoveFromSaved/RemoveFromSaved'
export { default as SavedItems } from '../../widgets/Saved/ui/SavedItems/SavedItems'

export { savedSlice, savedActions } from './store/slice/savedReducer'

export type { SharedSavedProps, SavedProps } from './ui/SavedProvider/SavedProvider'

export { default as SavedProvider } from './ui/SavedProvider/SavedProvider'

export { savedApi } from './api'
export type { SavedApi } from './types'


export type { SavedSlice } from './store/slice/initialState'

export { default as SavedSelectors } from './store/selectors/saved.selectors'
