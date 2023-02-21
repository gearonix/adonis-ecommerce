import Head from 'next/head'
import {ContentBlock, ContentButtons, EditProfile, ProfileHeader} from 'widgets/Profile'
import {FC, useEffect} from 'react'
import {ContentModal} from 'shared/ui/mui'
import AddProduct from 'widgets/Products/ui/AddProduct/AddProduct'
import {MessageBar} from 'entities/Messenger/MessageBar'
import {MessageForm} from 'features/Messenger/MessageForm'
import {SearchedProduct} from 'entities/SearchMapItems'
import {AddToSavedSearch} from 'features/Saved'
import {Post} from 'entities/Profile/Post'
import {WithSpring} from 'shared/ui/animations'
import {useBooleanState} from 'shared/lib/helpers/hooks/common'
import {useDispatch, useSelector} from 'shared/types/redux'
import selectors from 'shared/selectors/userSelectors'
import {getMyProducts} from 'widgets/Products/store/thunks/getMyProducts'


const Profile: FC = () => {
  const editProfile = useBooleanState()
  const addProduct = useBooleanState(true)
  const userName = useSelector(selectors.userName)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyProducts())
  }, [])

  return <WithSpring>
    <Head>
      <title>Adonis - {userName}</title>
    </Head>

    <ContentModal isOpened={editProfile.isOpen} close={editProfile.close}>
      <EditProfile close={editProfile.close}/>
    </ContentModal>
    <ContentModal isOpened={addProduct.isOpen} close={addProduct.close}>
      <AddProduct cancel={addProduct.close}/>
    </ContentModal>

    <ProfileHeader openProfile={editProfile.open}/>
    <div className={'profile_wall'}>
      <ContentButtons openModal={addProduct.open}/>
      <MessageBar MessageForm={MessageForm}/>
      <ContentBlock>
        <SearchedProduct AddToSaved={AddToSavedSearch}/>
        <Post/>
      </ContentBlock>
    </div>
  </WithSpring>
}

export default Profile
