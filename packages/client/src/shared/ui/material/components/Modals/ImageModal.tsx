import { Backdrop, Fade, Modal } from '@mui/material'
import { FC, useState } from 'react'
import { ModalProps } from '../../types'
import Image from 'next/image'
import { NextImage } from 'shared/ui/kit'

export const ImageModal: FC<ModalProps> = ({ isOpen, close, image, def }) => {
  return image ? <Modal
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
