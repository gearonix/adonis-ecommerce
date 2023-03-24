import { memo } from 'react'
import { FiHeart } from 'shared/ui/icons'
import { BlueLink } from 'shared/ui/kit'
import { SquareButtonProps } from 'features/Saved'
import { ApiAnimation } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'
import s from './style.module.scss'

const ProductSaved = memo<SquareButtonProps>(({ onClick, isChecked }) => {
  const { t } = useTranslation()
  return <ApiAnimation type={'increaseSize'} onClick={onClick} className={s.saved}>
    <BlueLink className={s.blueLink}>
      <FiHeart/> {!isChecked ? t('Save for later') : t('Remove from saved')}</BlueLink>
  </ApiAnimation>
})

export default ProductSaved
