import { FC } from 'react'
import { Box, Fade, Modal } from '@mui/material'
import { ContentModalProps } from '../../../types'
import s from './style.module.scss'

const ModalStyles = {
  bgcolor: 'background.paper'
}

export const ContentModal: FC<ContentModalProps> = ({ isOpened, close, children }) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpened}
        onClose={close}
        closeAfterTransition
      >
        <Fade in={isOpened}>
          <Box sx={ModalStyles} className={s.modal}>
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
