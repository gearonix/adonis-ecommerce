import {FC} from 'react'
import {AddProductTemplate} from 'entities/Profile/AddProduct'
import {ProductImages} from 'features/Profile/ProductImage'

const AddProduct: FC<{ cancel: () => void }> = ({cancel}) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return <AddProductTemplate submitForm={() => {
  }} cancel={cancel}
  ProductImages={<ProductImages/>}/>
}

export default AddProduct
