import {FC} from 'react';

const OpenProfileEdit: FC<{ openProfile: () => void }> = ({openProfile}) => {
    return <button className="outlined_button" onClick={openProfile}>Change profile</button>;
};

export default OpenProfileEdit;
