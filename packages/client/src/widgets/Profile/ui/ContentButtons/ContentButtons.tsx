import { OpenAddProduct, OpenAddPost } from 'features/Profile'
import { FC, memo } from 'react'
import { ContentButtons as ContentButtonsTemplate } from 'features/Profile'

interface ContentButtonsProps{
  openAddProduct: () => void,
  openAddPost: () => void
}


const ContentButtons = memo<ContentButtonsProps>(({ openAddProduct, openAddPost }) => {
  return <ContentButtonsTemplate
    AddProduct={<OpenAddProduct open={openAddProduct}/>}
    AddPost={<OpenAddPost open={openAddPost}/>}
  />
})

export default ContentButtons
