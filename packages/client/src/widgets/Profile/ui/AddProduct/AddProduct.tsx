import {FC} from 'react';
import {AddProductTemplate} from 'entities/Profile/AddProduct';
import {ProductImages} from 'features/Profile/ProductImage';

const AddProduct: FC<{ cancel: () => void }> = ({cancel}) => {
  return <AddProductTemplate submitForm={() => {
  }} cancel={cancel}
  ProductImages={<ProductImages/>}/>;
};

export default AddProduct;
