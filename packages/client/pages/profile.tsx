import {ProfileHeader, ProfileWall} from 'components/pages/profile'
import Head from 'next/head'
import {NCT} from 'types/global'

const Profile: NCT = () => {
    return <>
        <Head>
            <title>Adonis - [User]</title>
        </Head>
        <ProfileHeader/>
        <ProfileWall/>
        </>
}

export default Profile
