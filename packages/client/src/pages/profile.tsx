import Head from 'next/head'
import {ProfileHeader} from 'widgets/Profile/ProfileHeader'
import {FC, useState} from "react";
import {ContentModal} from "mui";
import {EditProfile} from "widgets/Profile/EditProfile";
import AddProduct from "widgets/Profile/AddProduct/ui/AddProduct";
import {ContentButtons} from "widgets/Profile/ContentButtons";
import {MessageBar} from "entities/Messenger/MessageBar";
import {MessageForm} from "features/Messenger/MessageForm";
import {ContentBlock} from 'widgets/Profile/ContentBlock';
import {SearchProduct} from "entities/SearchMapItems";
import {AddToSavedSearch} from "features/Saved";
import {Post} from "entities/Profile/Post";

const Profile: FC = () => {
    const [IsEditProfile, openEditProfile] = useState<boolean>(false)
    const [isAddProduct, openAddProduct] = useState<boolean>(false)
    const closeEdit = () => openEditProfile(false)
    const closeProduct = () => openAddProduct(false)

    return <>
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
    </>
}

export default Profile
