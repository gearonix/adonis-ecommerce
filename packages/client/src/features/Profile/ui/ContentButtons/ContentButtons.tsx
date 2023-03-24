import { FC, memo, ReactElement, ReactNode, useContext } from 'react'
import s from './style.module.scss'
import { AiOutlineFileAdd, AiOutlineUnorderedList, FiHeart } from 'shared/ui/icons'
import { WallPages } from 'widgets/Profile/types'
import cn from 'classnames'
import { ProfileWallContext } from 'widgets/Profile/contexts'
import { useTranslation } from 'react-i18next'

export interface ContentButtonsProps {
  AddProduct?: ReactElement | false,
  AddPost?: ReactElement,
}


const ContentButtons = memo<ContentButtonsProps>(({ AddProduct, AddPost }) => {
  const { t } = useTranslation()
  return <div className={s.content_buttons}>
    <ContentButton page={WallPages.posts}><AiOutlineFileAdd/> {t('Posts')}</ContentButton>
    <ContentButton page={WallPages.products}><AiOutlineUnorderedList/> {t('Products')}</ContentButton>
    <ContentButton page={WallPages.saved}><FiHeart/> {t('Saved cropped')}</ContentButton>
    <div className={s.add_product}>
      {AddPost}
      {AddProduct}
    </div>
  </div>
})

interface ContentButtonProps{
  page: WallPages,
  children: ReactNode
}

const ContentButton: FC<ContentButtonProps> = ({ children, page }) => {
  const { page: currentPage, setPage } = useContext(ProfileWallContext)

  return <button
    className={cn({ [s.selected]: page === currentPage }, s.content_button)}
    onClick={() => setPage?.(page)}>{children}</button>
}

export default ContentButtons
