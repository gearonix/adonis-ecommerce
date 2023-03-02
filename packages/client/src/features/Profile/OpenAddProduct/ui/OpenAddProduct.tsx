import {FC} from 'react'
import {BsCartPlus} from 'shared/ui/icons'
import {useSelector} from 'shared/types/redux'
import userSelectors from 'shared/selectors/userSelectors'
import {Displayed} from 'shared/lib/components'

const OpenAddProduct: FC<{ open: () => void }> = ({open}) => {
  const isSalesman = useSelector(userSelectors.isSalesman)
  const isMe = useSelector(userSelectors.isMe)
  return <Displayed condition={isMe && isSalesman}>
    <button className={'outlined_button'}
      onClick={open}><BsCartPlus/> Add Product</button>
  </Displayed>
}

export default OpenAddProduct
