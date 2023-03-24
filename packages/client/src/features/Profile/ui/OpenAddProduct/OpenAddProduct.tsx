import { FC, memo } from 'react'
import { BsCartPlus } from 'shared/ui/icons'
import { useSelector } from 'shared/types/redux'
import userSelectors from 'widgets/Profile/store/selectors/profile/profile.selectors'
import { Display } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import { toast } from 'react-toastify'

const OpenAddProduct = memo<{ open:() => void }>(({ open }) => {
  const isSalesman = useSelector(userSelectors.isSalesman)
  const isMe = useSelector(userSelectors.isMe)
  const { t } = useTranslation()

  const onClick = () => {
    if (isSalesman) {
      return open()
    }
    toast(t('Register as a seller'))
  }

  return <Display when={isMe}>
    <button className={cn('outlined_button', { disabled: !isSalesman })}
      onClick={onClick}><BsCartPlus/><span>{t('Add Product')}</span></button>
  </Display>
})

export default OpenAddProduct
