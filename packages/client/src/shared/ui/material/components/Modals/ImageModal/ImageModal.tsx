import { Backdrop, Fade, Modal } from '@mui/material'
import { FC } from 'react'
import { ModalProps } from '../../../types'
import { NextImage } from 'shared/ui/kit'
import { useAdaptive } from 'shared/lib/hooks'

export const ImageModal: FC<ModalProps> = ({ isOpen, close, image, def }) => {
  const isMobile = useAdaptive(900)
  return image && !isMobile ? <Modal
    open={isOpen}
    onClose={() => close(false)}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500
    }}
    sx={{
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      '&:hover': {
        backgroundcolor: 'red'
      }
    }}
  >
    <Fade in={isOpen} timeout={500}>
      <div>
        <NextImage src={image} def={def}/>
      </div>
    </Fade>
  </Modal> : null
}
