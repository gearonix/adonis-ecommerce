import {FC} from 'react'
import {BsCartPlus} from 'shared/ui/icons'
import {useSelector} from 'shared/types/redux'
import userSelectors from 'shared/selectors/userSelectors'

const OpenAddProduct: FC<{ open: () => void }> = ({open}) => {
  const isMe = useSelector(userSelectors.isMe)
  return isMe ? <button className={'outlined_button'}
    onClick={open}><BsCartPlus/> Add Product</button> : null
}

export default OpenAddProduct
