import {FC, ReactElement, useState} from 'react'
import {NextImage} from 'shared/ui/kit'
import s from './style.module.scss'
import {ImageModal} from 'shared/ui/mui'
import {useBooleanState} from 'shared/lib/helpers/hooks/common'

interface ProfileBackgroundProps{
    src: string | null,
    ChangeBackground: ReactElement
}


export const ProfileBackground : FC<ProfileBackgroundProps> = ({src, ChangeBackground}) => {
  const error = useBooleanState()

  return <>
    {src && !error.isOpen ? <ExistingBackground src={src}
      onError={error.open}/> : <div className={s.default}/>}
    {ChangeBackground}
  </>
}

const ExistingBackground: FC<{src: string, onError: () => void}> = ({src, onError}) => {
  const [isOpen, setIsOpened] = useState<boolean>(false)

  return <>
    <ImageModal isOpen={isOpen} close={() => setIsOpened(false)} image={src} />
    <div className={s.image_wrapper} onClick={() => setIsOpened(true)}>
      <NextImage src={src} alt={''} priority={true} onError={onError}/>
    </div></>
}
