import {FC} from 'react';
import s from './style.module.scss';
import {HeadField, StandardSelect, TextArea} from 'mui';
import {AddProductProps} from '../types';

const AddProduct: FC<AddProductProps> = ({submitForm, cancel, ProductImages}) => {
  return <div className={s.add_product_block}>
    <h2 className={s.title}>Add Product</h2>
    <div className={s.container}>
      <div className={s.flex}>
        <HeadField title={'Product Name'}/>
        <HeadField title={'Product Price'}/>
      </div>
      <TextArea/>
      <div className={s.select_container}>
        <StandardSelect/>
        <StandardSelect/>
      </div>
    </div>
    <h2 className={s.title}>Product Images</h2>
    <div className={s.container}>
      {ProductImages}
      <div className={s.save_buttons}>
        <button className="primary_button" onClick={submitForm}>Add Product</button>
        <button className="outlined_button" onClick={cancel}>Cancel</button>
      </div>
    </div>
  </div>;
};

export default AddProduct;
