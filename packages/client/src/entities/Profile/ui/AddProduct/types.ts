import { ProductImagesProps } from 'features/Profile/ui/ProductImage/UploadProductImages'
import { FC } from 'react'
import { CreateFieldValues } from 'shared/lib/helpers'
import { AddProductForm } from 'widgets/Products/types'

export interface AddProductProps {
    cancel: () => void,
    submitForm: () => void,
    ProductImages: FC<ProductImagesProps>,
    reg: CreateFieldValues<AddProductForm>,

}
