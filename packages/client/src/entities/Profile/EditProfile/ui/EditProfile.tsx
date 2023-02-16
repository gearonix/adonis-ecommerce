import {FC} from 'react';
import s from './style.module.scss';
import {NextImage} from 'shared/ui';
import {HeadField, TextArea} from 'mui';
import {EditProfileProps} from '../types';
import countries from 'country-list-js';
import SearchSelect from 'shared/lib/mui/components/Selects/SearchSelect';


const EditProfile: FC<EditProfileProps> = ({ChangeBackground, ChangeAvatar,
                                             close, submitForm, reg, user}) => {
  return <div className={s.add_product_block}>
    <h2 className={s.title}>Change Profile</h2>
    <div className={s.container}>

      <div className={s.background}>
        <NextImage src={user.background || '/electronic_prewiew.svg'}/>
        {ChangeBackground}
      </div>
      <div className={s.user_info_block}>
        <div className={s.user_avatar_block}>
          <div className={s.user_avatar}>
            <NextImage src={user.avatar || '/avatar.jpg'}/>
          </div>
          {ChangeAvatar}
        </div>
        <HeadField title={'First Name'} values={reg('firstName')}/>
        <HeadField title={'Last Name'} values={reg('lastName')}/>
      </div>
      <TextArea title={'Description'} values={reg('description')}/>
      <SearchSelect values={countries.names()} inputValues={reg('country')} />
      <SearchSelect values={countries.capitals()} inputValues={reg('city')} />
      <div className={s.save_buttons}>
        <button className="primary_button" onClick={submitForm}>Save</button>
        <button className="outlined_button" onClick={close}>Cancel</button>
      </div>
    </div>
  </div>;
};

export default EditProfile;
