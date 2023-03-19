import { FC, memo } from 'react'
import { BsFileEarmarkPost } from 'shared/ui/icons'
import { useSelector } from 'shared/types/redux'
import userSelectors from 'widgets/Profile/store/selectors/profile/profile.selectors'
import { Display } from 'shared/lib/components'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'

const OpenAddPost = memo<{ open:() => void }>(({ open }) => {
  const isMe = useSelector(userSelectors.isMe)
  const isSalesman = useSelector(userSelectors.isSalesman)
  const { t } = useTranslation()

  return <Display when={isMe}>
    <button className={cn('outlined_button')}
      onClick={open} ><BsFileEarmarkPost/> {t('Write Post')}</button>
  </Display>
})

export default OpenAddPost
