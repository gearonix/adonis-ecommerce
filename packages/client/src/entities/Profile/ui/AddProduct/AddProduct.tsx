import { FC } from 'react'
import s from './style.module.scss'
import { AutoComplete, Checkbox, HeadField, NumberField, Rating, StandardSelect, TextArea } from 'shared/ui/material'
import { AddProductProps } from 'entities/Profile/ui/AddProduct/types'


const AddProduct: FC<AddProductProps> = ({ submitForm, cancel, ProductImages, reg }) => {
  return <div className={s.add_product_block}>
    <h2 className={s.title}>Add Product</h2>
    <div className={s.container}>

      <div className={s.flex}>
        <HeadField title={'Product Name'} values={reg('name', 20)}/>
      </div>
      <TextArea title={'Product description'} values={reg('description', 55)} />
      <HeadField title={'Product Design'} values={reg('design', 20)}/>
      <Rating title={'Product Rating'} values={reg('rating')}/>
      <Checkbox title={'In stock'} values={reg('inStock')}/>
      <NumberField title={'Price'} values={reg('price')}/>
      <NumberField title={'Warranty count'} values={reg('warrantyCount')}/>

      <div className={s.select_container}>
        <StandardSelect title={'Product type'} values={reg('type')}/>
        <StandardSelect title={'Product model'} values={reg('model')}/>
      </div>
      <StandardSelect title={'Product size'} values={reg('size')}/>
      <AutoComplete title={'Product features'} values={reg('features')}/>
      <HeadField title={'ProductMaterial'} values={reg('material')} />
    </div>
    <h2 className={s.title}>Product Images</h2>
    <div className={s.container}>
      <ProductImages values={reg('images')}/>
      <div className={s.save_buttons}>
        <button className="primary_button" onClick={submitForm}>Add Product</button>
        <button className="outlined_button" onClick={cancel}>Cancel</button>
      </div>
    </div>
  </div>
}

export default AddProduct
