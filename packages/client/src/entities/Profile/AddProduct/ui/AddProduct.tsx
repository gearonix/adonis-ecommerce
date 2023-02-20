import {FC, ReactElement} from 'react'
import s from './style.module.scss'
import {HeadField, Rating, StandardSelect, TextArea} from 'shared/ui/mui'
import {CreateFieldValues} from 'shared/lib/helpers/others/formHelpers'
import {AddProductForm} from "widgets/Profile/types";

export interface AddProductProps {
  cancel: () => void,
  submitForm: () => void,
  ProductImages: ReactElement,
  reg: CreateFieldValues<AddProductForm>,
}


const AddProduct: FC<AddProductProps> = ({submitForm, cancel, ProductImages, reg}) => {
  return <div className={s.add_product_block}>
    <h2 className={s.title}>Add Product</h2>
    <div className={s.container}>
      <div className={s.flex}>
         <HeadField title={'Product Name'} values={reg('name')}/>
      </div>
      <TextArea title={'Product description'} values={reg('description')} />
      <HeadField title={'Product Design'} values={reg('design')}/>
      <Rating title={'Product Rating'} values={reg('rating')}/>
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
  </div>
}

export default AddProduct
