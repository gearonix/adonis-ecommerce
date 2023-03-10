import { FC } from 'react'
import s from './style.module.scss'
import { AutoComplete, Checkbox, HeadField, NumberField, Rating, StandardSelect, TextArea } from 'shared/ui/material'
import { AddProductProps } from './types'
import { AiOutlineShoppingCart as CartIcon } from 'shared/ui/icons'

const AddProduct: FC<AddProductProps> = ({ submitForm, cancel, ProductImages, reg }) => {
  return <div className={s.add_product_block}>
    <h2 className={s.title}>Add Product</h2>
    <div className={s.container}>
      <div className={s.fields}>
        <div className={s.flex}>
          <HeadField title={'Product Name'} values={reg('name', 20)}/>
          <HeadField title={'Product Design'} values={reg('design', 20)}/>
        </div>
        <Rating title={'Product Rating'} values={reg('rating')}/>
        <Checkbox title={'In stock'} values={reg('inStock')}/>
        <div className={s.greyLine}/>
        <div className={s.flex}>
          <div className={s.numberFields}>
            <NumberField title={'Price'} values={reg('price')}/>
            <NumberField title={'Warranty count'} values={reg('warrantyCount')}
              Icon={CartIcon}/>
          </div>
          <ProductImages values={reg('images')}/>
        </div>
        <TextArea title={'Product description'} values={reg('description', 55)} />
        <div className={s.greyLine}/>
        <div className={s.select_container}>
          <StandardSelect title={'Product type'} values={reg('type')}/>
          <StandardSelect title={'Product model'} values={reg('model')}/>
          <StandardSelect title={'Product size'} values={reg('size')}/>
        </div>
        <div className={s.flex}>
          <HeadField title={'Product Material'} values={reg('material')} />
        </div>


        <AutoComplete title={'Product features'} values={reg('features')}/>
      </div>

    </div>
    <div className={s.save_buttons}>
      <button className="primary_button" onClick={submitForm}>Add Product</button>
      <button className="outlined_button" onClick={cancel}>Cancel</button>
    </div>
  </div>
}

export default AddProduct
