import { FC } from 'react'
import s from './style.module.scss'
import { AiOutlineArrowLeft } from 'shared/ui/icons'
import { Button } from 'shared/ui/kit'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'

export interface CartButtonsProps {
  RemoveAll?: FC,
  BackColor: 'primary' | 'green'
}


const CartButtons: FC<CartButtonsProps> = ({ RemoveAll, BackColor }) => {
  return <div className={s.cart_buttons}>
    <Link href={routes.SEARCH}>
      <Button w={'159px'} color={BackColor}>
        <AiOutlineArrowLeft/> Back to shop
      </Button>
    </Link>
    {RemoveAll && <RemoveAll/>}

  </div>
}

export default CartButtons
