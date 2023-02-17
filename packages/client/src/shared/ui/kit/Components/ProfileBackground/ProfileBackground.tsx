import {FC, ReactElement, useState} from 'react'
import {NextImage} from 'shared/ui/kit'
import s from './style.module.scss'
import {ImageModal} from 'shared/ui/mui'

interface ProfileBackgroundProps{
    src: string | null,
    ChangeBackground: ReactElement
}


export const ProfileBackground : FC<ProfileBackgroundProps> = ({src, ChangeBackground}) => {
  return <>
    {src ? <ExistingBackground src={src}/> : <div className={s.default}/>}
    {ChangeBackground}
  </>
}

const ExistingBackground: FC<{src: string}> = ({src}) => {
  const [isOpen, setIsOpened] = useState<boolean>(false)

  return <>
    <ImageModal isOpen={isOpen} close={() => setIsOpened(false)} image={src} />
    <div className={s.image_wrapper} onClick={() => setIsOpened(true)}>
      <NextImage src={src} alt={''} priority={true}/>
    </div></>
}
