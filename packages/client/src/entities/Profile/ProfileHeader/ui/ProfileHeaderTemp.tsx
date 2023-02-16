import {FC} from 'react';
import s from './style.module.scss';
import {NextImage} from 'shared/ui';
import {ProfileHeaderTemplate} from '../types';

const ProfileHeaderTemp: FC<ProfileHeaderTemplate> = ({ChangeBackground, OpenProfileEdit, user}) => {
  const avatar = user.user_image || '/avatar.jpg';
  const background = user.background || '/electronic_prewiew.svg'

  return <div className={s.profile_header}>
    <div className={s.electronic_prewiewground}>
      {ChangeBackground}
      <NextImage src={background} alt={''}/>
    </div>
    <div className={s.info_block}>
      <div className={s.avatar}>
        <NextImage src={avatar} loader={() => avatar} alt={''} quality={100}/>
      </div>
      <div className={s.user_info}>
        <h2 className={s.user_name}>{user.user_name}</h2>
        <p className={s.description}>{user.description}</p>
      </div>
      <div className={s.change_profile}>
        {OpenProfileEdit}
      </div>
    </div>
  </div>;
};

export default ProfileHeaderTemp;
