import { FC } from 'react'
import s from './style.module.scss'
import { NextImage } from 'shared/ui/kit'
import { DefaultAssets } from 'shared/config/consts/assets'
import { useBooleanState } from 'shared/lib/hooks/useBooleanState'
import { ImageModal } from 'shared/ui/material'

interface UserAvatarProps{
  src: string | null,
}


export const UserAvatar: FC<UserAvatarProps> = ({ src }) => {
  const error = useBooleanState()

  return src && !error.isOpen ? <ExistingAvatar src={src} onError={error.open}/> : <DefaultAvatar/>
}


const DefaultAvatar = () => {
  return <div className={s.default_avatar}>
    <NextImage src={DefaultAssets.AVATAR} alt={''} quality={100}
      priority={true} />
  </div>
}

const ExistingAvatar: FC<{src: string, onError: () => void}> = ({ src, onError }) => {
  return <>
    <NextImage src={src} alt={''}
      quality={100} priority={true} onError={onError} />
  </>
}


