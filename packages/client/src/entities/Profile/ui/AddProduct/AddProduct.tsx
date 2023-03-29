import { FC, memo } from 'react'
import s from './style.module.scss'
import { AutoComplete, Checkbox, HeadField, NumberField, Rating,
  StandardSelect, TextArea } from 'shared/ui/material'
import { AddProductProps } from './types'
import { AiOutlineShoppingCart as CartIcon, MdOutlineDescription,
  IoIosResize, IoLogoModelS, FiType, GiMaterialsScience, AiOutlineStar
  , BiDollar, BsPen, MdOutlineDesignServices } from 'shared/ui/icons'
import { Typography } from '@mui/material'
import { NextImage } from 'shared/ui/kit'
import { useTheme } from 'shared/lib/hooks'
import cn from 'classnames'
import { Assets } from 'shared/config/consts/assets'
import { useTranslation } from 'react-i18next'
import { publicAssets } from 'shared/lib/helpers'

const AddProduct = memo<AddProductProps>(({ submitForm, cancel, ProductImages, reg }) => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  return <div className={cn(s.add_product_block, 'with_theme', theme)}>
    <h2 className={s.title}>{t('Add Product')}</h2>
    <div className={s.background_image}>
      <NextImage src={publicAssets(Assets.ROCKET)} />
    </div>
    <div className={s.container}>
      <div className={s.fields}>
        <div className={cn(s.flex, s.product_names)}>
          <HeadField title={t('Product Name')} values={reg('name', 20)} Icon={BsPen}/>
          <HeadField title={t('Product Design')} values={reg('design', 20)} Icon={MdOutlineDesignServices}/>
        </div>
        <Rating title={t('Product Rating')} values={reg('rating')}/>
        <Typography component="legend" style={{ marginBottom: '10px' }}>In Stock</Typography>
        <Checkbox title={t('In Stock')} values={reg('inStock')}/>

        <div className={s.greyLine}/>
        <div className={cn(s.flex, s.product_images_block)}>
          <div className={s.numberFields}>
            <NumberField title={t('Price')} values={reg('price')} Icon={BiDollar}/>
            <NumberField title={t('Warranty (years)')}
              values={reg('warrantyCount')}
              Icon={CartIcon}/>
          </div>
          <ProductImages values={reg('images')}/>
        </div>
        <TextArea title={t('Product description')}
          values={reg('description', 55)} Icon={MdOutlineDescription}/>
        <div className={s.greyLine}/>
        <div className={s.select_container}>
          <StandardSelect title={t('Product_type')} values={reg('type')} Icon={FiType}/>
          <StandardSelect title={t('Product_model')} values={reg('model')} Icon={IoLogoModelS}/>
          <StandardSelect title={t('Product_size')} values={reg('size')} Icon={IoIosResize}/>
          <div className={s.product_image_wrapper}>
            <NextImage src={publicAssets(Assets.BICYCLE)} />
          </div>
        </div>
        <div className={s.flex}>
          <HeadField title={t('Product Material')} values={reg('material')} Icon={GiMaterialsScience}/>
        </div>
        <div className={s.greyLine}/>
        <AutoComplete title={t('Product features')} values={reg('features')} Icon={AiOutlineStar}/>
      </div>
      <div className={s.save_buttons}>
        <button className="primary_button" onClick={submitForm}>{t('Add Product')}</button>
        <button className="outlined_button" onClick={cancel}>{t('Cancel')}</button>
      </div>
    </div>
  </div>
})

export default AddProduct
