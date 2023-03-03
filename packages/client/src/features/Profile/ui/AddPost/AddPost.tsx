import { FC } from 'react'
import { BsCartPlus } from 'shared/ui/icons'
import { useSelector } from 'shared/types/redux'
import userSelectors from 'shared/selectors/user'
import { Displayed } from 'shared/lib/components'

const OpenAddPost: FC<{ open: () => void }> = ({ open }) => {
  const isSalesman = useSelector(userSelectors.isSalesman)
  const isMe = useSelector(userSelectors.isMe)
  return <Displayed condition={isMe && isSalesman}>
    <button className={'outlined_button'}
      onClick={open}><BsCartPlus/> Add Post</button>
  </Displayed>
}

export default OpenAddPost
