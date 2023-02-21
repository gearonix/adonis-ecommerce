import {ProductImagesProps} from 'features/Profile/ProductImage/ui/UploadProductImages'
import {FC} from 'react'
import {CreateFieldValues} from 'shared/lib/helpers/others'
import {AddProductForm} from 'widgets/Profile/types'

export interface AddProductProps {
    cancel: () => void,
    submitForm: () => void,
    ProductImages: FC<ProductImagesProps>,
    reg: CreateFieldValues<AddProductForm>,

}
