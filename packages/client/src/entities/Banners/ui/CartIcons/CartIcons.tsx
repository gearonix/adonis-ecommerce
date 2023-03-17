import { FC } from 'react'
import s from './style.module.scss'
import { AiFillLock, FaTruck, MdMessage } from 'shared/ui/icons'
import { CartIcon } from 'shared/ui/kit'
import { useTranslation } from 'react-i18next'

const CartIcons: FC = () => {
  const { t } = useTranslation()
  return <div className={s.cart_icons}>
    <CartIcon Icon={AiFillLock} title={t('Safety')} subtitle={t('Good Security.')}/>
    <CartIcon Icon={MdMessage} title={t('Convenient messenger')}
      subtitle={t('Go to "Messenger" tab.')}/>
    <CartIcon Icon={FaTruck} title={t('Fast delivery')}
      subtitle={t('We deliver goods in an hour.')}/>
  </div>
}


export default CartIcons
