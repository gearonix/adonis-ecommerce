import { FC, ReactElement } from 'react'
import { NextImage } from 'shared/ui/kit'
import s from './style.module.scss'
import { useBooleanState } from 'shared/lib/hooks/useBooleanState'
import { ImageModal } from 'shared/ui/material'
import { FiSettings } from 'react-icons/fi'
import { Display } from 'shared/lib/components'

interface Props{
    src: string | null,
    ChangeBackground: ReactElement,
    openSettings?: () => void,
    isMe?: boolean
}


export const ProfileBackground : FC<Props> =
    ({ src, ChangeBackground, openSettings, isMe }) => {
      const error = useBooleanState()

      return <>
        {src && !error.isOpen ? <ExistingBackground src={src}
          onError={error.open}/> : <div className={s.default}/>}
        {ChangeBackground}
        <Display when={openSettings && isMe}>
          <FiSettings onClick={openSettings}/>
        </Display>
      </>
    }

const ExistingBackground: FC<{src: string, onError: () => void}> = ({ src, onError }) => {
  const modal = useBooleanState()
  return <>
    <ImageModal isOpen={modal.isOpen} close={modal.close} image={src}/>
    <div className={s.image_wrapper} onClick={modal.open}>
      <NextImage src={src} alt={''} priority={true} onError={onError}/>
    </div></>
}
