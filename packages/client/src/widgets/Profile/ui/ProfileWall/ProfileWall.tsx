import {FC, useContext, useState} from 'react'
import s from './style.module.scss'
import {ContentButtons} from 'widgets/Profile'
import {useBooleanState} from 'shared/lib/helpers/hooks/common'
import {ContentModal} from 'shared/ui/mui'
import {AddProduct, MyProducts} from 'widgets/Products'
import {WallPages} from 'widgets/Profile/types'
import {ProfileWallContext} from 'widgets/Profile/contexts'
import {SavedProvider, SavedItems} from 'features/Saved'
import {ProfileSaved} from 'widgets/Saved'

const ProfileWall : FC = () => {
  const addProduct = useBooleanState()
  const [page, setPage] = useState<WallPages>(WallPages.posts)

  return <ProfileWallContext.Provider value={{page, setPage}}>
    <div className={s.profile_wall}>
      <ContentModal isOpened={addProduct.isOpen} close={addProduct.close}>
        <AddProduct cancel={addProduct.close}/>
      </ContentModal>
      <ContentButtons openModal={addProduct.open} />
      <ProfileWallSwitcher/>
    </div>
  </ProfileWallContext.Provider>
}

const ProfileWallSwitcher: FC = () => {
  const {page} = useContext(ProfileWallContext)
  return <div style={{width: '100%'}}>
    {page === WallPages.products && <MyProducts/>}
    {page === WallPages.saved && <SavedItems Component={ProfileSaved} AddToSaved={SavedProvider}/>}
  </div>
}


export default ProfileWall
