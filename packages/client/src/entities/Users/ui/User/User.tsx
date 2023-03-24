import React, { FC } from 'react'
import s from './style.module.scss'
import { User } from 'widgets/Profile'
import { BlueLink, NextImage, WriteToUser } from 'shared/ui/kit'
import { DefaultAssets } from 'shared/config/consts/assets'
import { Helpers } from 'shared/lib/helpers'
import { useTranslation } from 'react-i18next'
import { getLocation } from 'entities/Users/lib/getLocation'
import cn from 'classnames'
import { UserRoles } from 'app/config/globals'
import { GiTopHat } from 'react-icons/gi'
import { AiOutlineApi } from 'shared/ui/icons'
import { Display, Ternary, WithSpring } from 'shared/lib/components'
import { CiLocationOn } from 'react-icons/ci'
import { BsClouds } from 'react-icons/bs'
import { CFC } from 'shared/types/components'
import Link from 'next/link'
import { routes } from 'shared/config/consts/routes'

interface UserProps{
    user: User,
    isMe: boolean
}


const User : FC<UserProps> = ({ user, isMe }) => {
  const helpers = new Helpers()
  const { t } = useTranslation()
  const isSalesman = user.role === UserRoles.SALESMAN
  return <WithSpring className={s.user}>
    <LinkToUser userId={user.userId}>
      <div className={s.avatar}>
        <NextImage src={user.avatar} def={DefaultAssets.AVATAR}/>
      </div>
    </LinkToUser>
    <div className={s.info}>
      <LinkToUser userId={user.userId}>
        <h2 className={cn(s.user_name, { [s.salesman]: isSalesman })}>
          <Ternary where={isSalesman}>
            <GiTopHat/>
            <AiOutlineApi/>
          </Ternary>
          {helpers.toNormalName(user)}
        </h2>
        <h3 className={s.email}>{user.email}</h3>
      </LinkToUser>
      <h3 className={s.location}>
        <CiLocationOn/> {t('Location')}: {getLocation(user.country, user.city)}
      </h3>
      <h3 className={s.location}>
        <BsClouds/> {t('Role_s')}: {t(helpers.toNormalRole(user.role))}
      </h3>
      <p className={s.description}>{user.description || t('No description.')}</p>
      <LinkToUser userId={user.userId}>
        <BlueLink className={s.view_details}>{t('View_details')}</BlueLink>
      </LinkToUser>
    </div>
    <Display when={!isMe}>
      <WriteToUser targetId={user.userId} className={s.write_message}/>
    </Display>
    <span className={s.date}>{helpers.reformatMysqlDate(user.registration_date)}</span>
  </WithSpring>
}

const LinkToUser: CFC<{userId: number}> = ({ userId, children }) => {
  return <Link href={`${routes.USERS}/${userId}`}>
    {children}
  </Link>
}


export default User
