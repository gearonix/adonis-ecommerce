import {FC} from 'react'
import s from './style.module.scss'
import Image from 'next/image'
import {HiOutlineFlag, MdMessage, TfiWorld} from 'shared/ui/icons'
import {Button} from 'shared/ui/kit'
import {User} from 'shared/types/slices'
import {ObjectNullable} from 'shared/types/common'


export interface PurchaseProductP {
  BuyProduct: FC,
  AddToSaved: FC,
  salesman: ObjectNullable<User>
}


const PurchaseProduct: FC<PurchaseProductP> = ({AddToSaved, BuyProduct, salesman}) => {
  return <div className={s.purchase_block}>
    <div className={s.purchase_card}>
      <div className={s.purchase_supplier}>
        <Image height={48} width={48} alt={''}
          src={salesman.avatar || 'assets/default_avatar.png'}
          priority={false}/>
        <h2>
                    Supplier: <br/>
          {salesman.firstName} {salesman.lastName}
        </h2>
      </div>
      <span className={s.supplier_params}><MdMessage/>{salesman.email}</span>
      <span className={s.supplier_params}><TfiWorld/>{salesman.country ? salesman.country :
          'No Country'}</span>
      <span className={s.supplier_params}><HiOutlineFlag/>{salesman.city ? salesman.city : 'No City'}</span>
      <BuyProduct/>
      <Button w={'100%'} color={'blueBordered'}>Seller’s profile</Button>
    </div>
    <AddToSaved/>
  </div>
}

export default PurchaseProduct
