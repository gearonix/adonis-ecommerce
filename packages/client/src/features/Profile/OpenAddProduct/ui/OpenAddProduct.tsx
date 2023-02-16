import {FC} from 'react';
import {BsCartPlus} from 'icons';

const OpenAddProduct: FC<{ open: () => void }> = ({open}) => {
  return <button className={'outlined_button'}
    onClick={open}><BsCartPlus/> Add Product</button>;
};

export default OpenAddProduct;
