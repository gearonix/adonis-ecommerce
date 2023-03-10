import { FC } from 'react'
import { useSelector } from 'shared/types/redux'
import userSelectors from 'shared/selectors/user/user.selectors'

const ChangeProfile: FC<{ openProfile: () => void }> = ({ openProfile }) => {
  const isMe = useSelector(userSelectors.isMe)
  return isMe ? <button className="outlined_button" onClick={openProfile}>Change profile</button> : null
}

export default ChangeProfile
