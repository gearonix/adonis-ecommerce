import {ProfileHeaderTemp} from 'entities/Profile/ProfileHeader';
import {FC} from 'react';
import {ChangeBackground} from 'features/Profile/ChangeBackground';
import {OpenProfileEdit} from 'features/Profile/OpenProfileEdit';
import {useReformatUser} from 'widgets/Profile/lib/hooks';

const ProfileHeader: FC<{ openProfile: () => void }> = ({openProfile}) => {
    const user = useReformatUser()

    return <ProfileHeaderTemp ChangeBackground={<ChangeBackground/>}
                              OpenProfileEdit={<OpenProfileEdit openProfile={openProfile}/>} user={user}/>;
};

export default ProfileHeader;
