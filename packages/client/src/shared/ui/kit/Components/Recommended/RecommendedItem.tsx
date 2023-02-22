import {FC} from 'react'
import s from './style.module.scss'
import {NextImage} from 'shared/ui/kit'

export const RecommendedItem: FC = () => {
  return <div className={s.item}>
    <h3 className={s.item_title}>Soft chairs</h3>
    <span className={s.item_description}>From USD 19</span>
    <div className={s.item_image}>
      <NextImage src={'/assets/dev/mock_item.svg'}/>
    </div>
  </div>
}

