import { FC } from 'react'
import s from './style.module.scss'
import { Button, ProfileBackground, UserAvatar } from 'shared/ui/kit'
import { HeadField, TextArea } from 'shared/ui/material'
import { EditProfileProps } from './types'
import countries from 'country-list-js'
import SearchSelect from 'shared/ui/material/components/Selects/SearchSelect'
import { useTheme } from 'shared/lib/hooks'
import cn from 'classnames'
import { AiOutlineCar, BsBuilding } from 'shared/ui/icons'
import { useTranslation } from 'react-i18next'


const EditProfile: FC<EditProfileProps> = ({ ChangeBackground, ChangeAvatar,
  close, submitForm, reg, user }) => {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return <div className={cn(s.add_product_block, s[theme || 'light'])}>
    <h2 className={s.title}>{t('Change_profile')}</h2>
    <div className={s.container}>

      <div className={s.background}>
        <ProfileBackground src={user.background} ChangeBackground={ChangeBackground}/>
      </div>
      <div className={s.user_info_block}>
        <div className={s.user_avatar_block}>
          <div className={s.user_avatar}>
            <UserAvatar src={user.avatar} />
          </div>
          {ChangeAvatar}
        </div>
        <HeadField title={t('First_Name')} values={reg('firstName')}/>
        <HeadField title={t('Last_Name')} values={reg('lastName')}/>
      </div>
      <TextArea title={t('Description')} values={reg('description', 55)}/>
      <SearchSelect values={countries.names()}
        inputValues={reg('country')} Icon={AiOutlineCar}/>
      <SearchSelect values={countries.capitals()}
        inputValues={reg('city')} Icon={BsBuilding}/>
      <div className={s.save_buttons}>
        <Button onClick={submitForm} w={140} className={s.save} h={30}>{t('Save')}</Button>
        <Button onClick={close} w={140} className={s.cancel} h={30}>{t('Cancel')}</Button>
      </div>
    </div>
  </div>
}

export default EditProfile
