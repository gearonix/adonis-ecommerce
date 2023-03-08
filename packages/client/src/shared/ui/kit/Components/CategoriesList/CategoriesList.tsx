import React, { FC } from 'react'
import s from './style.module.scss'
import { ProductTypesKeys, ProductTypes } from 'shared/types/elements/productTypes'
import { Helpers } from 'shared/lib/helpers'
import { useTranslation } from 'react-i18next'


interface Props{
  value: ProductTypesKeys,
  setValue: (value: ProductTypesKeys) => void
}

export const CategoriesList: FC<Props> = ({ value, setValue }) => {
  const helpers = new Helpers()
  const { t } = useTranslation()
  return <div className={s.list}>
    {ProductTypes.map((productType, idx) => (
      <h2 className={s.list_item}
        id={helpers.strOrUndefined(value === productType, 'active')}
        key={idx}
        onClick={() => setValue(productType)}
      >{t(productType)}</h2>
    ))}
  </div>
}

