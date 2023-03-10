import { FC } from 'react'
import { BsCartPlus } from 'shared/ui/icons'
import { useSelector } from 'shared/types/redux'
import userSelectors from 'shared/selectors/user/user.selectors'
import { Display } from 'shared/lib/components'

const OpenAddPost: FC<{ open: () => void }> = ({ open }) => {
  const isSalesman = useSelector(userSelectors.isSalesman)
  const isMe = useSelector(userSelectors.isMe)
  return <Display when={isMe && isSalesman}>
    <button className={'outlined_button'}
      onClick={open}><BsCartPlus/> Add Post</button>
  </Display>
}

export default OpenAddPost
