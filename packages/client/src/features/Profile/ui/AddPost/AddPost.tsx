import { FC, memo } from 'react'
import { BsFileEarmarkPost } from 'shared/ui/icons'
import { useSelector } from 'shared/types/redux'
import userSelectors from 'widgets/Profile/store/selectors/profile/profile.selectors'
import { Display } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'

const OpenAddPost = memo<{ open:() => void }>(({ open }) => {
  const isSalesman = useSelector(userSelectors.isSalesman)
  const isMe = useSelector(userSelectors.isMe)
  const { t } = useTranslation()
  return <Display when={isMe && isSalesman}>
    <button className={'outlined_button'}
      onClick={open}><BsFileEarmarkPost/> {t('Write Post')}</button>
  </Display>
})

export default OpenAddPost
