import { FC } from 'react'
import s from './style.module.scss'
import Controls from 'features/SearchPage/ui/AsideControls/Controls'
import { CreateFieldValues } from 'shared/lib/helpers'
import { RadioGroup } from 'shared/ui/kit'
import { Radio, ReadonlyRating } from 'shared/ui/material'
import { SearchControlsForm } from 'widgets/Products/types'


interface SearchAsideProps{
  reg: CreateFieldValues<SearchControlsForm>,
}

const SearchAsideTemp: FC<SearchAsideProps> = ({ reg }) => {
  return <aside className={s.aside}>
    <Controls title={'Product Type'} values={reg('type')}>
      <RadioGroup values={reg('type')} Component={Radio}/>
    </Controls>
    <Controls title={'Product Model'} values={reg('model')}>
      <RadioGroup values={reg('model')} Component={Radio}/>
    </Controls>
    <Controls title={'Product Size'} values={reg('size')}>
      <RadioGroup values={reg('size')} Component={Radio}/>
    </Controls>
    <Controls title={'Product Rating'} values={reg('rating')}>
      <RadioGroup values={reg('rating')} Component={ReadonlyRating}/>
    </Controls>
  </aside>
}

export default SearchAsideTemp
