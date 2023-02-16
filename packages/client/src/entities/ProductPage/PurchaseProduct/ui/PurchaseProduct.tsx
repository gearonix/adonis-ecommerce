import {FC} from 'react';
import s from './style.module.scss';
import Image from 'next/image';
import {HiOutlineFlag, MdMessage, TfiWorld} from 'icons';
import {Button} from 'shared/ui';
import {PurchaseProductP} from './types';

const PurchaseProduct: FC<PurchaseProductP> = ({AddToSaved, BuyProduct}) => {
  return <div className={s.purchase_block}>
    <div className={s.purchase_card}>
      <div className={s.purchase_supplier}>
        <Image height={48} width={48} alt={'Supplier'} src={'/avatar.jpg'}
          priority={false}/>
        <h2>
                    Supplier <br/>
                    Guanjoi Trading LLC
        </h2>
      </div>
      <span className={s.supplier_params}><HiOutlineFlag/> Germany, Berlin</span>
      <span className={s.supplier_params}><MdMessage/>Germany, Berlin</span>
      <span className={s.supplier_params}><TfiWorld/>Germany, Berlin</span>
      <BuyProduct/>
      <Button w={'100%'} color={'blueBordered'}>Seller’s profile</Button>
    </div>
    <AddToSaved/>
  </div>;
};

export default PurchaseProduct;
