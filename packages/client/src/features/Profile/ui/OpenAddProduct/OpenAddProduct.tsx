import { FC } from 'react'
import { BsCartPlus } from 'shared/ui/icons'
import { useSelector } from 'shared/types/redux'
import userSelectors from 'widgets/Profile/store/selectors/users/user.selectors'
import { Display } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'

const OpenAddProduct: FC<{ open: () => void }> = ({ open }) => {
  const isSalesman = useSelector(userSelectors.isSalesman)
  const isMe = useSelector(userSelectors.isMe)
  const { t } = useTranslation()
  return <Display when={isMe && isSalesman}>
    <button className={'outlined_button'}
      onClick={open}><BsCartPlus/>  {t('Add Product')}</button>
  </Display>
}

export default OpenAddProduct
