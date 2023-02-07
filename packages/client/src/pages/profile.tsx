import Head from 'next/head';
import {ContentBlock, ContentButtons, EditProfile, ProfileHeader} from 'widgets/Profile';
import {FC, useState} from 'react';
import {ContentModal} from 'mui';
import AddProduct from 'widgets/Profile/ui/AddProduct/AddProduct';
import {MessageBar} from 'entities/Messenger/MessageBar';
import {MessageForm} from 'features/Messenger/MessageForm';
import {SearchProduct} from 'entities/SearchMapItems';
import {AddToSavedSearch} from 'features/Saved';
import {Post} from 'entities/Profile/Post';
import {WithSpring} from 'shared/lib/animations';

const Profile: FC = () => {
    const [IsEditProfile, openEditProfile] = useState<boolean>(false);
    const [isAddProduct, openAddProduct] = useState<boolean>(false);
    const closeEdit = () => openEditProfile(false);
    const closeProduct = () => openAddProduct(false);

    return <WithSpring>
        <Head>
            <title>Adonis - [User]</title>
        </Head>

        <ContentModal isOpened={IsEditProfile} close={closeEdit}>
            <EditProfile close={closeEdit}/>
        </ContentModal>
        <ContentModal isOpened={isAddProduct} close={closeProduct}>
            <AddProduct cancel={closeProduct}/>
        </ContentModal>

        <ProfileHeader openProfile={() => openEditProfile(true)}/>
        <div className={'profile_wall'}>
            <ContentButtons openModal={() => openAddProduct(true)}/>
            <MessageBar MessageForm={MessageForm}/>
            <ContentBlock>
                <SearchProduct AddToSaved={AddToSavedSearch}/>
                <Post/>
            </ContentBlock>
        </div>
    </WithSpring>;
};

export default Profile;
