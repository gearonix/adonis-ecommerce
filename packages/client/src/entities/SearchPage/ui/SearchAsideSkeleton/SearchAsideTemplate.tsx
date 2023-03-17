import { FC, memo } from 'react'
import s from './style.module.scss'
import Controls from 'features/SearchPage/ui/AsideControls/Controls'
import { CreateFieldValues } from 'shared/lib/helpers'
import { RadioGroup } from 'shared/ui/kit'
import { Radio, ReadonlyRating } from 'shared/ui/material'
import { SearchControlsForm } from 'widgets/Products/types'
import { useTranslation } from 'react-i18next'


interface SearchAsideProps{
  reg: CreateFieldValues<SearchControlsForm>,
}

const SearchAsideTemplate = memo<SearchAsideProps>(({ reg }) => {
  const { t } = useTranslation()
  return <aside className={s.aside}>
    <Controls title={t('Product_type')} values={reg('type')}>
      <RadioGroup values={reg('type')} Component={Radio}/>
    </Controls>
    <Controls title={t('Product_model')} values={reg('model')}>
      <RadioGroup values={reg('model')} Component={Radio}/>
    </Controls>
    <Controls title={t('Product_size')} values={reg('size')}>
      <RadioGroup values={reg('size')} Component={Radio}/>
    </Controls>
    <Controls title={t('Product_Rating')} values={reg('rating')}>
      <RadioGroup values={reg('rating')} Component={ReadonlyRating}/>
    </Controls>
  </aside>
})

export default SearchAsideTemplate
