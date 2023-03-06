import { FC, useContext, useState } from 'react'
import s from './style.module.scss'
import { ContentButtons } from 'widgets/Profile'
import { ContentModal } from 'shared/ui/material'
import { AddProduct, MyProducts } from 'widgets/Products'
import { WallPages } from 'widgets/Profile/types'
import { ProfileWallContext } from 'widgets/Profile/contexts'
import { SavedItems, SavedProvider } from 'features/Saved'
import { ProfileSaved } from 'widgets/Saved'
import { MyPosts } from 'widgets/Posts'
import AddPost from '../../../Posts/ui/AddPost/AddPost'
import { useBooleanState } from 'shared/lib/hooks/useBooleanState'

const ProfileWall : FC = () => {
  const addProduct = useBooleanState()
  const addPost = useBooleanState()
  const [page, setPage] = useState<WallPages>(WallPages.posts)

  return <ProfileWallContext.Provider value={{ page, setPage }}>
    <div className={s.profile_wall}>
      <ContentModal isOpened={addProduct.isOpen} close={addProduct.close}>
        <AddProduct cancel={addProduct.close}/>
      </ContentModal>
      <ContentModal isOpened={addPost.isOpen} close={addPost.close}>
        <AddPost close={addPost.close}/>
      </ContentModal>
      <ContentButtons openAddProduct={addProduct.open} openAddPost={addPost.open}/>
      <ProfileWallSwitcher/>

    </div>
  </ProfileWallContext.Provider>
}

const ProfileWallSwitcher: FC = () => {
  const { page } = useContext(ProfileWallContext)
  return <div className={s.wall}>
    {page === WallPages.products && <MyProducts/>}
    {page === WallPages.saved && <SavedItems Component={ProfileSaved} AddToSaved={SavedProvider}/>}
    {page === WallPages.posts && <MyPosts/>}
  </div>
}


export default ProfileWall
