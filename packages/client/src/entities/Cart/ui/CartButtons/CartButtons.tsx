import {FC} from 'react';
import s from './style.module.scss';
import {AiOutlineArrowLeft} from 'icons';
import {CartButtonsProps} from '../../types';
import {Button} from 'shared/ui';

const CartButtons: FC<CartButtonsProps> = ({RemoveAll, BackColor}) => {
  return <div className={s.cart_buttons}>
    <Button w={'159px'} color={BackColor}>
      <AiOutlineArrowLeft/> Back to shop
    </Button>
    <RemoveAll/>
  </div>;
};

export default CartButtons;
