import {ProfileHeaderTemp} from 'entities/Profile/ProfileHeader';
import {FC} from 'react';
import {ChangeBackground} from 'features/Profile/ChangeBackground';
import {OpenProfileEdit} from 'features/Profile/OpenProfileEdit';

const ProfileHeader: FC<{ openProfile: () => void }> = ({openProfile}) => {
    return <ProfileHeaderTemp ChangeBackground={<ChangeBackground/>}
                              OpenProfileEdit={<OpenProfileEdit openProfile={openProfile}/>}/>;
};

export default ProfileHeader;
