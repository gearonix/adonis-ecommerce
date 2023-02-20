import {FC} from 'react'
import s from './style.module.scss'
import {NextImage} from 'shared/ui/kit'

interface UserAvatarProps{
  src: string | null,
}


export const UserAvatar: FC<UserAvatarProps> = ({src}) => {
  return src ? <ExistingAvatar src={src}/> : <DefaultAvatar/>
}


const DefaultAvatar = () => {
  return <div className={s.default_avatar}>
    <NextImage src={'/assets/default_avatar.png'} alt={''} quality={100} priority={true}/>
  </div>
}

const ExistingAvatar: FC<{src: string}> = ({src}) => {
  return <>
    <NextImage src={src} loader={() => src} alt={''}
      quality={100} priority={true} />
  </>
}


