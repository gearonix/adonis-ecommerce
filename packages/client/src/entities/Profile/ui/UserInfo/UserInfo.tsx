import { FC } from 'react'
import { FormattedUser } from 'widgets/Profile/store/selectors'
import { BsInfoLg, GiTopHat, SlPresent, AiOutlineCar, BsBuilding, CiAt } from 'shared/ui/icons'
import s from './style.module.scss'
import { Helpers } from 'shared/lib/helpers'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'
import { CFC } from 'shared/types/components'
import { Display } from 'shared/lib/components'
import { useTheme } from 'shared/lib/hooks'
import { useTranslation } from 'react-i18next'

interface UserInfoProps{
    user: FormattedUser
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
  const helpers = new Helpers()
  const { theme } = useTheme()
  const { t } = useTranslation()
  return <div className={s[theme || 'light']}>
    <InfoContainer>
      <InfoCell Icon={BsInfoLg}>{helpers.cropped(user.description, 30)}</InfoCell>
      <div className={s.info_cell}>
        <CiAt/>
        <Link href={`${routes.USERS}/${user.userId}`}>
          <span>Id:<span className={s.link}>{user.userId}</span></span>
        </Link>
      </div>
    </InfoContainer>
    <InfoContainer>
      <InfoCell Icon={SlPresent} title={t('Registration_date') || ''}>
        {user.date}
      </InfoCell>
    </InfoContainer>
    <InfoContainer condition={Boolean(user.country && user.city)}>
      <InfoCell Icon={AiOutlineCar} title={t('Country') || ''}>
        {user.country}
      </InfoCell>
      <InfoCell Icon={BsBuilding} title={t('City') || ''}>
        {user.city}
      </InfoCell>
    </InfoContainer>
    <InfoContainer>
      <InfoCell Icon={GiTopHat} title={t('Role') || ''}>
        {t(helpers.toNormalRole(user.role))}
      </InfoCell>
    </InfoContainer>
  </div>
}

const InfoContainer : CFC<{condition?: boolean}> = ({ children, condition }) => {
  return <Display when={!!children && condition !== false}>
    <div className={s.info_container}>
      {children}
    </div>
  </Display>
}

const InfoCell: CFC<{Icon: FC, title?: string}> = ({ Icon, children, title }) => {
  return <Display when={!!children}>
    <div className={s.info_cell}>
      <Icon/>
      <span>{title && `${title}:`} {children}</span>
    </div>
  </Display>
}


export default UserInfo
