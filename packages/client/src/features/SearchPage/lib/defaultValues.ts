import { ProductTypes } from 'shared/types/elements/productTypes'
import { Nullable } from 'shared/types/common'

export const searchDefaultValues = (search: Nullable<string>) => ({
  selectValues: {
    type: ProductTypes
  },
  defaultValues: {
    search: search || ''
  }
})
