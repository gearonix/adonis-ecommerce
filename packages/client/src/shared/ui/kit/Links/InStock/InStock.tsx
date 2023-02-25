import {AiOutlineCheck, RxCross1} from 'shared/ui/icons'
import {FC} from 'react'

export const InStock: FC<{inStock: boolean}> = ({inStock}) => {
  return inStock ? <h5 className={'color_green'}>
    <AiOutlineCheck/> In Stock
  </h5> : <h5 className={'color_red'}>
    <RxCross1/> Not in Stock
  </h5>
}
