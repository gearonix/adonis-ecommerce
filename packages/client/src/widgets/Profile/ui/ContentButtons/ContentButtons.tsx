import {FC} from 'react'
import {ContentButtonsTemplate} from 'features/Profile/ContentButtons'
import {OpenAddProduct} from 'features/Profile/OpenAddProduct'
import {OpenAddPost} from 'features/Profile/AddPost'

interface ContentButtonsProps{
  openAddProduct: () => void,
  openAddPost: () => void
}


const ContentButtons: FC<ContentButtonsProps> = ({openAddProduct, openAddPost}) => {
  return <ContentButtonsTemplate
    AddProduct={<OpenAddProduct open={openAddProduct}/>}
    AddPost={<OpenAddPost open={openAddPost}/>}
  />
}

export default ContentButtons
