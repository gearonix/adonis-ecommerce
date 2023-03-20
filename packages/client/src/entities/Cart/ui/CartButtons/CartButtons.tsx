import { FC, memo } from 'react'
import s from './style.module.scss'
import { AiOutlineArrowLeft } from 'shared/ui/icons'
import { Button } from 'shared/ui/kit'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'
import { useTranslation } from 'react-i18next'

export interface CartButtonsProps {
  RemoveAll?: FC,
  BackColor: 'primary' | 'green'
}


const CartButtons = memo<CartButtonsProps>(({ RemoveAll, BackColor }) => {
  const { t } = useTranslation()
  return <div className={s.cart_buttons}>
    <Link href={routes.SEARCH}>
      <Button w={'159px'} color={BackColor}>
        <AiOutlineArrowLeft/> {t('Back_to')}
      </Button>
    </Link>
    {RemoveAll && <RemoveAll/>}

  </div>
})

export default CartButtons
