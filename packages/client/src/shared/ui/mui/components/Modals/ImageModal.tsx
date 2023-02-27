import {Backdrop, Fade, Modal} from '@mui/material'
import {FC, useState} from 'react'
import {ModalProps} from '../../types'
import Image from 'next/image'

export const ImageModal: FC<ModalProps> = ({isOpen, close, image, def}) => {
  const [src, setSrc] = useState<string>(image)
  return <Modal
    open={isOpen}
    onClose={() => close(false)}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
    sx={{
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      '&:hover': {
        backgroundcolor: 'red',
      },
    }}
  >
    <Fade in={isOpen} timeout={500}>
      <Image src={src} alt={''} fill onError={() => setSrc(def)}/>
    </Fade>
  </Modal>
}
