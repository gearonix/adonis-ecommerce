import {FC} from 'react'
import s from './style.module.scss'
import {ContentButtons} from 'widgets/Profile'
import {useBooleanState} from 'shared/lib/helpers/hooks/common'
import {ContentModal} from 'shared/ui/mui'
import {AddProduct, MyProducts} from 'widgets/Products'
import {SearchPagination} from 'features/SearchPage/SearchPagination'


const ProfileWall : FC = () => {
  const addProduct = useBooleanState()

  return <div className={s.profile_wall}>
    <ContentModal isOpened={addProduct.isOpen} close={addProduct.close}>
      <AddProduct cancel={addProduct.close}/>
    </ContentModal>
    <ContentButtons openModal={addProduct.open}/>
    <div style={{width: '100%'}}>
      <MyProducts />
      <SearchPagination/>
    </div>
  </div>
}


export default ProfileWall
