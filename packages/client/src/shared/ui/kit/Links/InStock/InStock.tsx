import { AiOutlineCheck, RxCross1 } from 'shared/ui/icons'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const InStock: FC<{inStock: boolean}> = ({ inStock }) => {
  const { t } = useTranslation()
  return inStock ? <h5 className={'color_green'}>
    <AiOutlineCheck/> {t('In_Stock')}
  </h5> : <h5 className={'color_red'}>
    <RxCross1/> {t('Not_in_stock')}
  </h5>
}
