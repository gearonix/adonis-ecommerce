import { AiOutlineCheck, RxCross1 } from 'shared/ui/icons'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'


interface Props{
  inStock: boolean,
  withoutTitle?: boolean
}

export const InStock: FC<Props> = ({ inStock, withoutTitle }) => {
  const { t } = useTranslation()
  return inStock ? <h5 className={'color_green'}>
    <AiOutlineCheck/> {!withoutTitle && t('In_Stock')}
  </h5> : <h5 className={'color_red'}>
    <RxCross1/> {!withoutTitle && t('Not_in_stock')}
  </h5>
}
